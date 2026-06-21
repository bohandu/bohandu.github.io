import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import writingData from "@/data/writing.json";

export type Profile = typeof profileData;

export type WritingItem = (typeof writingData)[number];

export type ProjectItem = (typeof projectsData)[number];

export type WorkSummary = {
  title: string;
  category: string;
  source: string;
  date: string;
  dateLabel: string;
  description: string;
  link: string;
};

function formatChineseDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.valueOf())) {
    return date;
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long"
  }).format(parsed);
}

export function getProfile() {
  return profileData;
}

export function getWriting(): WorkSummary[] {
  return writingData.map((item) => ({
    title: item.title,
    category: item.category,
    source: item.publication,
    date: item.date,
    dateLabel: formatChineseDate(item.date),
    description: item.description,
    link: item.link
  }));
}

export function getFeaturedWriting() {
  return getWriting().filter((item) =>
    writingData.find((rawItem) => rawItem.title === item.title && rawItem.featured)
  );
}

export function getProjects() {
  return projectsData;
}

export function getFeaturedProjects(): WorkSummary[] {
  return projectsData
    .filter((project) => project.featured)
    .map((project) => ({
      title: project.title,
      category: project.status,
      source: project.tags.join(" / "),
      date: project.date,
      dateLabel: formatChineseDate(project.date),
      description: project.description,
      link: project.link
    }));
}
