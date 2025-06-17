import { resumeData } from "../constants/ResumeData.tsx";
import { ArrowIcon } from "../static/Icon/arrow.tsx";
import Footer from "../components/Footer.tsx";

export default function about() {
  return (
    <>
      <section class="text-white">
        <a class="flex mt-8" href="/">
          <ArrowIcon />
          Home
        </a>
        <div class="mt-12">
          <h1 class="font-bold text-3xl">{resumeData.name}</h1>
        </div>
        <div class="mt-4 flex flex-col gap-2">
          <h2 class="text-2xl">{resumeData.title}</h2>
          <p class="font-mono">{resumeData.summary}</p>
        </div>
        <div class="flex flex-col gap-3 mt-3">
          <h3 class="text-2xl text-gray-500 font-bold">Технические навыки</h3>
          <ul>
            <span class="text-blue">Инструменты:</span>
            {resumeData.skills.util.map((item, index) => (
              <li key={index}>
                — {item}
              </li>
            ))}
          </ul>
          <ul>
            <span class="text-blue">Web:</span>
            {resumeData.skills.web.map((item, index) => (
              <li key={index}>
                — {item}
              </li>
            ))}
          </ul>
          <div class="flex flex-col gap-3">
            <h3 class="text-2xl text-gray-500 font-bold">Социальные навыки</h3>
            <ul>
              {resumeData.skills.social.map((item, index) => (
                <li key={index}>
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-8 text-white mt-8">
        <h2 class="text-3xl">Опыт работы:</h2>
        <div class="flex flex-col gap-4">
          <div class="text-[18px] flex flex-col gap-1">
            <h3 class="text-[20px] text-blue text-">МКК А Деньги</h3>
            <h4>Москва</h4>
            <h5 class="text-[16px] text-gray-400">
              Март 2024 — по настоящее время
            </h5>
          </div>
          <div>
            <h4 class="text-2xl mb-2">Project manager</h4>
            <ul>
              <li>— Коммуникация между командой разработки и стейкхолдерами</li>
              <li>
                — Формирование производительности команды и транслирование
                отчётности для стейкхолдеров
              </li>
              <li>
                — Груминг бэклога (приоритет по оставшимся задачам)
              </li>
              <li>— Сбор требований к задачам и проектам</li>
              <li>
                — Мониторинг статуса продукта и контроль сроков инициатив и
                задач
              </li>
              <li>— Формирование эпиков и целей спринта</li>
              <li>— Ведение проектной документации</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="text-[18px] flex flex-col gap-1">
            <h3 class="text-[20px] text-blue text-">ABS GROUP</h3>
            <h4>Ставрополь</h4>
            <h5 class="text-[16px] text-gray-400">
              Июнь 2021 — Декабрь 2023
            </h5>
          </div>
          <div>
            <h4 class="text-2xl mb-2">Менеджер IT-проектов</h4>
            <ul>
              <li>— Распределение задач между разработчиками и дизайнером</li>
              <li>
                — Коммуникация между разработчиками и заказчиком (ведение
                переговоров, согласование, отчетность)
              </li>
              <li>
                — Управление командой (найм, контроль выполненных задач,
                организация процессов)
              </li>
              <li>— Первичный прием работ разработчиков и дизайнера</li>
              <li>— Ведение таск-трекинга</li>
              <li>— Груминг бэклога (приоритет по оставшимся задачам)</li>
              <li>— Ведение документации (гайдлайны)</li>
              <li>— Решение задач фронтенд части легкой сложности</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
