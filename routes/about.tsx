import { resumeData } from "../constants/ResumeData.tsx";

export default function about() {
  return (
    <section>
      <div class="mt-12">
        <h1>{resumeData.name}</h1>
      </div>
      <div>
        <h2>{resumeData.title}</h2>
        <p>{resumeData.summary}</p>
      </div>
    </section>
  );
}
