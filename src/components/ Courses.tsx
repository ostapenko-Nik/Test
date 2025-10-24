import { useEffect, useState } from "react";

interface Course {
  ID: number;
  Title: string;
  ShortDescription: string;
  Description: string;
  Rating: number;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch((err) => console.error("Ошибка:", err));
  }, []);

  return (
   <div className="flex flex-col items-center min-h-screen text-center p-8 mt-[50px]">

      <h1 className="text-4xl font-bold mb-6">Курсы из базы данных</h1>
      {courses.length === 0 ? (
        <p className="text-gray-500">Загрузка...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.ID}
              className="p-4 border rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{course.Title}</h2>
              <p className="text-gray-600 mt-2">{course.ShortDescription}</p>
              <p className="text-sm text-gray-400 mt-1">
                Рейтинг: {course.Rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
