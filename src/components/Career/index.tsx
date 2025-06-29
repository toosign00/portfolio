import { SectionHeader } from "@/layout/SectionHeader";
import { SectionLayout } from "@/layout/SectionLayout";
import { CareerItem } from "./components/CareerItem";

const experiences = [
	{
		period: "2024 – 현재",
		company: "Lorem Ipsum",
		role: "Frontend Developer",
		description: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		],
		skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
	},
	{
		period: "2023 – 2024",
		company: "Dolor Sit",
		role: "Junior Developer",
		description: [
			"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
			"Duis aute irure dolor in reprehenderit in voluptate velit esse.",
		],
		skills: ["JavaScript", "HTML", "CSS", "Git"],
	},
	{
		period: "2022 – 2023",
		company: "Amet Consectetur",
		role: "Web Developer Intern",
		description: [
			"Excepteur sint occaecat cupidatat non proident.",
			"Sunt in culpa qui officia deserunt mollit anim id est laborum.",
		],
		skills: ["HTML", "CSS", "JavaScript", "Figma"],
	},
];

export default function Career() {
	return (
		<SectionLayout id="career">
			<SectionHeader
				title="경력 사항"
				description="다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다."
				useAnimation={false}
			/>
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl text-center">
					<div className="space-y-12">
						{experiences.map((exp, _index) => (
							<CareerItem key={`${exp.company}-${exp.period}`} {...exp} />
						))}
					</div>
				</div>
			</div>
		</SectionLayout>
	);
}
