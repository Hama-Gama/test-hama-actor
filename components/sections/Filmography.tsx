// components/sections/Filmography.tsx
import React from 'react'

// Пример данных о проектах
const projects = [
	{
		year: '2024',
		title: 'Code name: Almaty',
		role: 'Support (Agent 02)',
		director: 'Ivan Ivanov',
		type: 'Feature Film',
	},
	{
		year: '2023',
		title: 'The Silent Code',
		role: 'Lead (Web Developer)',
		director: 'Petr Petrov',
		type: 'TV Series',
	},
	{
		year: '2023',
		title: 'Last Stand (Wushu Story)',
		role: 'Support (Martial Artist)',
		director: 'Lee Young-wook',
		type: 'Short Film',
	},
]

export const Filmography = () => {
	return (
		<section className='container mx-auto px-4'>
			<h2 className='text-3xl font-bold font-sans text-white'>Credits</h2>
			<div className='mt-8 bg-neutral-900 rounded-lg overflow-x-auto'>
				<table className='w-full text-left text-neutral-300'>
					<thead className='border-b border-neutral-800 text-sm uppercase text-neutral-500'>
						<tr>
							<th className='p-5 font-sans'>Year</th>
							<th className='p-5 font-sans'>Project Title</th>
							<th className='p-5 font-sans'>Role</th>
							<th className='p-5 font-sans'>Director / Production</th>
						</tr>
					</thead>
					<tbody>
						{projects.map((project, index) => (
							<tr
								key={index}
								className='border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/50'
							>
								<td className='p-5 font-medium'>{project.year}</td>
								<td className='p-5 font-bold text-white font-sans'>
									{project.title}
								</td>
								<td className='p-5'>{project.role}</td>
								<td className='p-5 text-sm'>
									{project.director} ({project.type})
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}

