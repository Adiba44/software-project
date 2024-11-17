num_entries = 200
base_email = "student"
domain = "@gmail.com"
base_name = "Student"
gender = "Male"
starting_academic_id = 1901051
session_id = 2
program_id = 1
role = "student"
created_by = 1

# Initialize the query
query = "INSERT INTO users(email, name, gender, academicId, sessionId, programId, role, createdAt, createdBy) VALUES\n"

# Generate values for each entry
values = []
for i in range(1, num_entries + 1):
    email = f'"{base_email}{i}{domain}"'
    name = f'"{base_name} {i}"'
    academic_id = starting_academic_id + i - 1
    values.append(f"({email}, {name}, '{gender}', {academic_id}, {session_id}, {program_id}, '{role}', CURRENT_TIMESTAMP, {created_by})")

# Join all values with a comma
query += ",\n".join(values) + ";"

# Save the query to a text file
with open("example-user-insertion-mysql-query.sql", "w") as file:
    file.write(query)

print("SQL query has been saved to insert_users.sql")
