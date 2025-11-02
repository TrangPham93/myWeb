export default function About(){
	return (
		<section>
			<h2>About Me</h2>
			<p>
				A swimmie 🧜‍♀️, a jogi 🧘‍♀️, a newbie in crocheting 🧶.<br/>
				I'm currently attending Hive Coding School. <br/>
				I hold a master degree in finance and worked 5 years as a financial controller. <br/>
				I worked intensively with financial data daily, understood and translated data to insightful and understandable reports. <br/>
				I like to explore the alternative solutions to automate repetitive tasks and increase time to brainstorm other pending problems.
			</p>
			<button 
				className="download-cv-btn"
				onClick={() => {
					const link = document.createElement('a');
					link.href = "/home/trang/myWeb/src/assets/CV-Trang Pham Thi Ha-2024.pdf"
					link.download = 'CV_TrangPham.pdf'
					link.click();
				}}
			>
				Download CV
			</button>
		</section>
	);
}