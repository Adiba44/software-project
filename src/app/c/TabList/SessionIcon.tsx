export default function SessionIcon({ fill }: { fill: boolean }) {
  if (fill !== true)
    return (
      <svg
        className="fill-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
      </svg>
    );
  else
    return (
      <svg
        className="fill-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M360-160h440q33 0 56.5-23.5T880-240v-80H360v160ZM80-640h200v-160H160q-33 0-56.5 23.5T80-720v80Zm0 240h200v-160H80v160Zm80 240h120v-160H80v80q0 33 23.5 56.5T160-160Zm200-240h520v-160H360v160Zm0-240h520v-80q0-33-23.5-56.5T800-800H360v160Z" />
      </svg>
    );
}