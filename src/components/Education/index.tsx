import { educations } from "@/data/education.data";
import { SectionHeader } from "@/layout/SectionHeader";
import { SectionLayout } from "@/layout/SectionLayout";

export const Education = () => {
	return (
		<SectionLayout id="education">
			<SectionHeader title="교육" useAnimation={false} />
			<div className="mx-auto max-w-3xl">
				<ul className="space-y-20">
					{educations.map((education, index) => (
						<li key={`${education.org}-${index}`} className="">
							<div className="relative">
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div className="flex items-center gap-3">
										<div className="bg-yellow/10 text-yellow flex h-10 w-10 items-center justify-center rounded-full">
											{education.org.charAt(0)}
										</div>
										<div>
											<h3 className="text-lg font-semibold text-white">
												{education.org}
											</h3>
											<p className="text-gray text-sm">{education.course}</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-gray rounded-full bg-white/5 px-3 py-1 text-xs">
											{education.period}
										</span>
									</div>
								</div>
								{education.desc && (
									<div className="mt-4 border-t border-white/5 pt-4">
										<ul className="space-y-1">
											{education.desc.map((item, idx) => (
												<li
													key={`${item.slice(0, 15)}-${idx}`}
													className="text-base text-white/80"
												>
													• {item}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</SectionLayout>
	);
};
