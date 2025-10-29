import { useEffect, useState } from "react";

interface Sections {
  ID: number;
  Title: string;
  Description: string;
  Instructor: string;
  Schedule: string;
}

export default function Sections() {
  const [sections, setSections] = useState<Sections[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/sections")
      .then((res) => res.json())
      .then((data: Sections[]) => {
        setSections(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке секций:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
        Загрузка секций...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-8 mt-[100px]">
      <h1 className="text-4xl font-bold mb-6 " style={{ textShadow: "0px 0px 20px #00f7ff" ,color: "#00f7ff",}}>Секции</h1>
      {sections.length === 0 ? (
        <p className="text-gray-500 " style={{ textShadow: "0px 0px 20px #00f7ff", color: "#00f7ff", }}>Пока нет доступных секций.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.ID}
              className="p-5 border rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {section.Title}
              </h2>
              <p className="text-gray-600 mt-2">{section.Description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Преподаватель: {section.Instructor}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Расписание: {section.Schedule}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
