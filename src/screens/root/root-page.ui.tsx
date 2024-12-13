'use client';
import { useEffect } from 'react';
import { Presentation } from '@/widgets/presentation';
import { Consultation } from '@/widgets/consultation';
import { Information } from '@/widgets/information';
import { Catalog } from '@/features/catalog';
import { Nuances } from '@/widgets/nuaces';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Hero } from '@/widgets/hero';
import { Faq } from '@/widgets/faq';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export function RootPage() {
	const lenis = useLenis();

	useEffect(() => {
		function handleModalState() {
			const modal = document.querySelector('.content');
			if (modal) {
				lenis?.stop();
			} else {
				lenis?.start();
			}
		}

		const observer = new MutationObserver(handleModalState);
		observer.observe(document.body, { childList: true, subtree: true, attributes: true });

		handleModalState();

		return () => {
			observer.disconnect();
		};
	}, [lenis]);

	return (
		<>
			<ReactLenis
				options={{
					lerp: 6.5,
					wheelMultiplier: 1.5,
				}}
				root
			>
				<Header />
				<main className='main'>
					<Hero />
					<Catalog />
					<Presentation />
					<Information />
					<Consultation />
					<Faq />
					<Nuances />
				</main>
				<Footer />
			</ReactLenis>
		</>
	);
}
