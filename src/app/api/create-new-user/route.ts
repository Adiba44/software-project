import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson, requestJson } from "@/app/api/utils/request-response";

export async function POST(request: any) {
    const formData = await requestJson(request);

    // Check email duplicacy
    let result = await execute("SELECT id FROM users WHERE email=? AND isDeleted=0", [formData.email])

    if (result.length > 0) return nextResponseJson({
        status: 403,
        message: "Email is duplicated.",
    });

    // Teacher user data
    if (formData.role === "teacher") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, departmentId, designation, role)
            VALUES (?,?,?,?,?,?)
            `, [formData.name, formData.email, formData.gender, formData.department.id, formData.designation, formData.role])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, newId])
        await execute(" INSERT INTO classroom.access(userId, acquireClass, createdBy) VALUES (?,?,?)", [newId, 1, newId])
    }

    // Student user data
    else if (formData.role === "student") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, academicId, sessionId, programId, role)
            VALUES (?,?,?,?,?,?,?)
            `, [formData.name, formData.email, formData.gender, formData.academicId, formData.session.id, formData.program.id, formData.role])

        // Update session related info
        await execute("UPDATE session SET usedByUser=usedByUser+1, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [result.insertId, formData.session.id])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, newId])
        await execute(" INSERT INTO classroom.access(userId, joinClass, createdBy) VALUES (?,?,?)", [newId, 1, newId])
    }

    // Other user data
    else if (formData.role === "other") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, designation, role)
            VALUES (?,?,?,?,?)
            `, [formData.name, formData.email, formData.gender, formData.designation, formData.role])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, newId])
        await execute(" INSERT INTO classroom.access(userId, createdBy) VALUES (?,?)", [newId, newId])
    }

    return nextResponseJson({ status: 200 });
};