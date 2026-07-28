import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import writingData from "@/data/writing.json";

export type Profile = typeof profileData;

export type WritingItem = {
  title: string;
  publication: string;
  date: string;
  category: string;
  description: string;
  link?: string;
  linkLabel?: string;
  links?: { label: string; url: string }[];
};

export type ProjectItem = (typeof projectsData)[number];

export type WorkSummary = {
  title: string;
  category: string;
  source: string;
  date: string;
  dateLabel: string;
  description: string;
  link?: string;
  linkLabel: string;
  links?: { label: string; url: string }[];
};

const writingItems = writingData as WritingItem[];

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

function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return [...items].sort((left, right) => {
    const leftTime = new Date(`${left.date}T00:00:00`).valueOf();
    const rightTime = new Date(`${right.date}T00:00:00`).valueOf();

    return rightTime - leftTime;
  });
}

export function getProfile() {
  return profileData;
}

export function getWriting(): WorkSummary[] {
  return sortByDateDesc(writingItems).map((item) => ({
    title: item.title,
    category: item.category,
    source: item.publication,
    date: item.date,
    dateLabel: formatChineseDate(item.date),
    description: item.description,
    link: item.link,
    linkLabel: item.linkLabel ?? "查看原文",
    links: item.links
  }));
}

export function getLatestWriting() {
  return getWriting().slice(0, 4);
}

export function getProjects() {
  return sortByDateDesc(projectsData);
}

export function getLatestProjects(): WorkSummary[] {
  return getProjects()
    .slice(0, 4)
    .map((project) => ({
      title: project.title,
      category: project.status,
      source: project.tags.join(" / "),
      date: project.date,
      dateLabel: formatChineseDate(project.date),
      description: project.description,
      link: project.link,
      linkLabel: "查看项目"
    }));
}
