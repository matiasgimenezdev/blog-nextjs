import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello, there 👋! My name is Matias.</p>
				<p>
					I consider myself passionate about technology and software
					development, so I try to keep learning day by day.
				</p>
			</section>
		</Layout>
	);
}
