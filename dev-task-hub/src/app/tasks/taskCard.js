export default function TaskCard({ title, status }) {
        return (
          <div className="border p-4 rounded-md shadow-md mb-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">Status: {status}</p>
          </div>
        );
      }
      