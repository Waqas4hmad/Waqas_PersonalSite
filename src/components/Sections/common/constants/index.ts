import {
	android,
	androidstudio,
	aws,
	css,
	git,
	gubloo,
	html,
	ios,
	javascript,
	jobdone,
	mobile,
	nodejs,
	novapic,
	pictuals,
	proovia,
	prooviaImg,
	reactjs,
	redux,
	relaxImg,
	restuImg,
	ropstam,
	ropstamImg,
	tailwind,
	techImg,
	typescript,
	web,
	zuri,
	zuriImg,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Android Native Developer",
		icon: androidstudio,
	},
	{
		title: "Web Developer",
		icon: web,
	},

];

const technologies = [
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "AWS",
		icon: aws,
	},
	{
		name: "Android",
		icon: android,
	},
	{
		name: "iOS",
		icon: ios,
	},
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Git",
		icon: git,
	},
];

const experiences = [
	{
		title: "React Native Developer",
		company_name: "Proovia Courier Ltd",
		icon: proovia,
		iconBg: "#E6DEDD",
		date: "Feb 2024 - Augest 2025",
		points: [
			"Engineered a robust and scalable mobile app using React Native and Expo, delivering clean architecture and high accessibility standards.",
			"Implemented and maintained automated testing frameworks with Jest and Detox, significantly elevating code quality and enabling frictionless deployments through strong cross-functional collaboration",
			"Leveraged EAS for seamless deployments and over-the-air (OTA) updates, ensuring successful cross-platform deployment to both Android and iOS app stores.",
			"Provided effective troubleshooting , debugging for mobiles applications",
		],
	},
	{
		title: "Sr React Native Developer,",
		company_name: "Ropstam Solution",
		icon: ropstam,
		iconBg: "#E6DEDD",
		date: "June 2022 - Sept 2023",
		points: [
			"Developed, Tested, Deployed, and Maintained Mobile Applications and Adding New Application Features.",
			"Successfully Communicated With the Client to Gather More In-Depth Information About the Assignment Requirements.",
			"Managing One Source For More Than 20 Clients along with Their Admin Panels and Complete Deployment For Admin, Android and IOS.",
			"Managing Whole Project and Keeping It Updated To Make it Compatible With Latest Android and IOS Updates.",
			"Participated in code reviews and contributed to the overall improvement of the codebase.",
		],
	},
	{
		title: "Sr React Native Developer",
		company_name: "Gubloo Technologies (PVT) Ltd ",
		icon: gubloo,
		iconBg: "#E6DEDD",
		date: "Oct 2022 - June 2022",
		points: [
			"Developed a cost-saving mobile app using React Native with TypeScript, enabling agents to onboard clients to the investment bank, resulting in potential cost savings of up to 75%.",
			"Created customized UI components, accounting for 70% of the total components, to deliver unique and visually appealing user experiences.",
			"Optimized data management by utilizing the Redux state management library, resulting in a 40% reduction in application loading time and an enhanced user experience.",
			"Played a crucial role in client and business user discussions, offering valuable insights and contributing to the design and timely delivery of optimal solutions that align with business rules and requirements.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Zuri Fertility ",
		icon: zuri,
		iconBg: "#E6DEDD",
		date: "Sept 2018 - Augest 2020",
		points: [
			"Developing and maintaining cross-platform mobile applications using React Native, ensuring seamless functionality and user experience.",
			"Integrating APIs and third-party services to enable real-time data synchronization, push notifications, and enhanced app features.",
			"Deploying and managing mobile applications on the Apple App Store and Google Play Store, ensuring compliance with platform standards.",
		],
	},
];

const projects = [
	{
		name: "NOVA ASSO – Association Management SaaS Platform",
		description: `NOVA ASSO is a comprehensive SaaS platform designed to help sports clubs, non-profit organizations, and community associations manage their operations through a unified digital ecosystem. The platform provides modular solutions for event scheduling, team and member management, volunteer coordination, financial tracking, communication, document storage, ticketing, partnership management, and board meeting administration.
        Built using a modern microservices-oriented architecture, the platform leverages Next.js for the frontend, NestJS for backend services, PostgreSQL for data management, AWS cloud infrastructure, and Terraform for Infrastructure as Code. The system enables organizations to activate only the modules they need while maintaining seamless integration across all business functions.  
        ### My Role: Senior Full Stack Engineer


Designed and developed scalable backend services using NestJS and TypeScript.
Architected modular microservice-based solutions for association management workflows.
Developed responsive frontend interfaces using Next.js and React.
Designed REST APIs and integrated multiple modules including event planning, member management, communication, volunteer management, and treasury systems.
Implemented JWT-based authentication and role-based access control.
Designed PostgreSQL database schemas and optimized data relationships across modules.
Integrated AWS services including S3, SES/SNS, CloudWatch, and RDS.
Created Infrastructure as Code using Terraform for automated environment provisioning.
Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment.
Collaborated with stakeholders to define business requirements, system architecture, and module integration strategies.
Applied best practices for scalability, security, performance optimization, and maintainability.


### Technologies Used


Next.js
React
NestJS
TypeScript
PostgreSQL
AWS (S3, RDS, ECS/Fargate, CloudWatch, SES)
Terraform
Docker
GitHub Actions
JWT Authentication
REST APIs
Microservices Architecture


### Key Achievements


Delivered a highly scalable modular platform supporting multiple association types.
Reduced manual administrative workload through workflow automation and notification systems.
Designed a cloud-native architecture capable of supporting future AI-powered features and third-party integrations.
Established a secure, maintainable, and extensible foundation for long-term platform growth.`,
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "pink-text-gradient",
			},
			{
				name: "PostgreSQL",
				color: "green-text-gradient",
			}, {
				name: "AWS",
				color: "orange-text-gradient",
			},


		],
		image: novapic,
		// source_code_lhttps://play.google.com/store/aink: "https://github.com/johnnithin08/react-movie-app",
		// live_link: "https://www.pictuals.ai/",
	},
	{
		name: "AI Content Platform - Pictuals.ai",
		description: `Powerful AI Features For
         Event Photography
         Everything you need to streamline event photo sharing & management
         Capture, Organize, & Deliver Event Photos Instantly  No Manual Work Needed!`,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "NestJS",
				color: "pink-text-gradient",
			},
			{
				name: "OpenAI APIs",
				color: "green-text-gradient",
			}, {
				name: "Node.js",
				color: "orange-text-gradient",
			},

		],
		image: pictuals,
		// source_code_lhttps://play.google.com/store/aink: "https://github.com/johnnithin08/react-movie-app",
		live_link: "https://www.pictuals.ai/",
	},
	{
		name: "Online freelancing platform - JobDone⁠",
		description: `Full-stack contributions across frontend verification, backend Python/ Django, and responsive UI
                      • Improved user engagement by 22% and reduced support requests by 18% `,
		tags: [
			{
				name: "Nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "Python/ Django",
				color: "pink-text-gradient",
			},
			{
				name: "Flask",
				color: "green-text-gradient",
			}, {
				name: "CI/ CD",
				color: "orange-text-gradient",
			}

		],
		image: jobdone,
		// source_code_lhttps://play.google.com/store/aink: "https://github.com/johnnithin08/react-movie-app",
		live_link: "https://jobdone.net/",
	},
	{
		name: "Donation Platform",
		description: `Designed and developed a scalable donation management platform that connects donors with charitable associations and fundraising projects. The system enables secure online donations, project funding transparency, automated tax document generation (CERFA), geolocation-based project discovery, and detailed reporting for donors and organizations. The platform supports both one-time and recurring donations while integrating third-party services for payment processing, business validation, and cloud document storage. 

### My Role

**Lead Full-Stack Developer & Solution Architect**


Designed the overall system architecture and database schema.
Built RESTful APIs for donor, association, project, and donation management.
Developed secure payment integrations supporting multiple payment methods.
Implemented recurring donation workflows and project lifecycle management.
Integrated INSEE API for SIRET business validation.
Implemented geolocation-based search and proximity features.
Automated CERFA tax document generation and secure cloud storage.
Designed scalable backend services with a focus on performance and security.
Implemented reporting, notification, and audit-tracking features.
Collaborated with stakeholders to translate business requirements into technical solutions. 


### Technologies


React.js / Next.js
Node.js / NestJS
TypeScript
PostgreSQL
Redis
AWS S3
Stripe API
REST APIs
Docker
GitHub Actions
Geolocation Services
INSEE API Integration


### Key Achievements


Built a secure and scalable donation platform supporting recurring and one-time contributions.
Automated tax-compliant CERFA document generation.
Implemented location-based association and project discovery.
Designed extensible architecture capable of supporting future features and increased user growth. 


This format works well for Freelancer.com, Upwork, LinkedIn, and portfolio websites.
[10:43 AM]## Project: NOVA ASSO Association & Sports Club Management Platform`,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient"
			},
			{
				name: "Nextjs",
				color: "pink-text-gradient"
			},
			{
				name: "PostgreSQL",
				color: "green-text-gradient"
			}, {
				name: "Node.js",
				color: "orange-text-gradient",
			},

		],
		image: prooviaImg,
		// source_code_lhttps://play.google.com/store/aink: "https://github.com/johnnithin08/react-movie-app",
		// live_link: "https://www.pictuals.ai/",
	},
	{
		name: "Technovation Town", 
		description: `
		Technovation Town is a premier global recruitment platform where you can discover the best talent to grow your business. Our platform ensures compliance with all regulations for a hassle-free recruitment with just one click. Every candidate is pre-vetted and experienced, ensuring they will drive success for your company.
        
		Technovation Town is a modern, fully responsive web application developed using React.js, TypeScript, and Tailwind CSS. The platform is designed to deliver a seamless and engaging user experience across all devices, including desktops, tablets, and mobile screens.
		I built the application from scratch with a strong focus on performance, scalability, and clean UI/UX design. Leveraging TypeScript ensured type safety and maintainable code, while Tailwind CSS enabled rapid development of a consistent and visually appealing interface.
		
		What I learned from the project:
Building scalable frontend architecture using React and TypeScript
Creating responsive layouts with Tailwind CSS
Writing clean, maintainable, and reusable code
Improving UI/UX design practices
Performance optimization techniques for modern web apps`,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
		],
		image: techImg,
		source_code_link: "https://github.com/johnnithin08/react-tailwind",
		live_link: "https://technovationtown.com",
	},
	// {
	// 	name: "AI Content Platform",
	// 	description: ` `,
	// 	tags: [
	// 		{
	// 			name: "React",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "NestJS",
	// 			color: "pink-text-gradient",
	// 		},
	// 		{
	// 			name: "OpenAI APIs",
	// 			color: "green-text-gradient",
	// 		}, {
	// 			name: "Node.js",
	// 			color: "purple-text-gradient",
	// 		},
	// 		,

	// 	],
	// 	image: prooviaImg,
	// 	// source_code_lhttps://play.google.com/store/aink: "https://github.com/johnnithin08/react-movie-app",
	// 	live_link: "https://www.pictuals.ai/",
	// },
	{
		name: "Proovia Courier Ltd",
		description: `Proovia Courier is a logistics and delivery mobile application designed to streamline parcel delivery operations for businesses and individual users. The app enables real-time tracking, order management, and efficient communication between customers, drivers, and administrators.
            
		Key Responsibilities:
			Developed cross-platform mobile application using React Native for Android and iOS
			Implemented real-time parcel tracking using GPS and map integration
			Integrated RESTful APIs for order management, user authentication, and delivery updates
			Designed and developed reusable UI components for scalable architecture
			Implemented state management using Redux / Context API
			Integrated push notifications for order updates and delivery status
            Worked on CI/CD pipelines for automated build and deployment


            Key Features:
           📦 Parcel Booking: Easy shipment creation with pickup & drop-off details
📍 Live Tracking: Real-time tracking of deliveries on map
🔔 Push Notifications: Instant alerts for order status updates
👤 User Authentication: Secure login & registration system
🚚 Driver Module: Assigned deliveries with route optimization
💳 Payment Integration: Online payment options (cards, wallets, etc.)
🧾 Order History: View past and ongoing deliveries
⭐ Ratings & Reviews: Feedback system for delivery service
🌐 Multi-language Support (optional)
📊 Admin Dashboard Integration (via backend APIs)`,
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			}, {
				name: "Google Maps API",
				color: "orange-text-gradient",
			},
			

		],
		image: prooviaImg,
		// source_code_link: "https://github.com/johnnithin08/react-movie-app",
		live_link: "https://play.google.com/store/apps/details?id=uk.co.proovia.couriers&hl=en_GB&pli=1",
	},
	{
		name: "Rolling Loud",
		description: ` Rolling Loud app gives fans one place to get content, sitemap, lineup, merch and more! Stay connected and get updates / information throughout the future event.
            
            Key Responsibilities:
			Developed a cross-platform mobile application using React Native for both iOS and Android.
            Designed and implemented scalable, reusable UI components for high-performance user experience.
Integrated RESTful APIs to fetch real-time data such as event schedules, artist lineups, and notifications.
Optimized app performance (lazy loading, memoization, efficient state management).
Implemented push notifications for live updates, announcements, and artist set reminders.
Collaborated with UI/UX designers to ensure pixel-perfect design implementation.
Managed global state using tools like Redux / Context API.
Integrated third-party services (maps, payment gateways, analytics).
Ensured app responsiveness across different devices and screen sizes.
Deployed and maintained apps on Google Play Store and Apple App Store, including CI/CD pipelines.

KEY FEATURES:
🎤 Artist Lineup & Schedule
Browse artists, stage timings, and create a personalized schedule.
📍 Interactive Festival Map
Integrated maps to help users navigate stages, food areas, and facilities.
🔔 Push Notifications
Real-time alerts for performance updates, delays, and announcements.
❤️ Favorites & Personal Agenda
Users can bookmark artists and get reminders before performances.
🎟️ Ticket Integration
Digital ticket access with QR code scanning.
📸 Social Feed / Media Sharing
Users can upload and view festival moments.
💳 In-App Payments
Cashless transactions for food, merchandise, and upgrades.
🌐 Offline Mode
Access schedules and maps without internet connectivity.
🔎 Search & Filters
Easily find artists, stages, and events.
📊 Analytics Integration
Track user engagement and app performance.
            `,
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "Aws",
				color: "orange-text-gradient",
			},
			{
				name: "Segments",
				color: "green-text-gradient",
			},
			{
				name: "One Signal",
				color: "pink-text-gradient",
			},
			{
				name: "CI/CD",
				color: "orange-text-gradient",
			}
		],
		image: ropstamImg,
		source_code_link: "https://github.com/johnnithin08/cab-expense",
		live_link:
			"https://apps.apple.com/gb/app/rolling-loud/id1231871120",

	},
	{
		name: "Zuri Fertility",
		description: `Zuri Fertility is a comprehensive fertility tracking app designed to help couples plan and optimize their chances of conception. With a user-friendly interface and powerful features, Zuri Fertility provides a seamless experience for monitoring ovulation, menstrual cycles, and other fertility indicators.

            Key Responsibilities:

            Developed the entire mobile application from scratch using React Native and TypeScript.
			Designed scalable and maintainable component architecture.
			Integrated Vimeo video streaming for educational and guided fertility content.
			Implemented an advanced, interactive calendar for tracking fertility cycles and health data.
			Built reusable UI components to ensure consistency across the app.
			Handled form validation, secure data handling, and error management.
            Collaborated with designers and backend teams to deliver a seamless product.
            
			What I learned from the project:
			Gained strong expertise in building scalable apps using React Native with TypeScript.
Learned how to design and implement complex calendar-based features with custom logic.
Improved skills in video streaming integration (Vimeo SDK/API).
Enhanced understanding of health-related data handling and user privacy considerations.
Strengthened knowledge of performance optimization for smooth cross-platform experience.
Developed better practices for code modularization and reusable components.
Learned how to manage complex state and data flow in real-world applications.
Improved debugging and problem-solving skills in production-level apps.
Gained experience working on user-centric design and improving UX based on requirements.
			`

		,
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "Calendar Integration",
				color: "orange-text-gradient",
			},
			{
				name: "Vimeo Integration",
				color: "green-text-gradient",
			},
			{
				name: "Google Payment",
				color: "pink-text-gradient",
			},
		],
		image: zuriImg,
		source_code_link:
			"https://github.com/johnnithin08/react-native-chat-app",
		live_link:
			"https://www.zurifertility.com",
	},
	{
		name: "Relax Sensation",
		description: `Developed a relaxation and mindfulness mobile application from scratch using React Native (JavaScript). The app is designed to help users reduce stress and improve focus through calming audio experiences. It integrates a music API along with a customized audio library to deliver soothing sounds based on user preferences and time-based sequences
        Implemented dynamic music playback with seamless looping functionality, allowing audio tracks to play continuously without interruption. Built a time-sequenced playback system where different sounds are triggered automatically based on predefined schedules (e.g., morning, evening, sleep time), enhancing the overall relaxation experience.    
		
		Key Features:
Integration of third-party Music APIs for streaming audio.
Custom-built audio library for personalized sound experiences.
Infinite loop playback for uninterrupted relaxation sessions.
Time-based music sequencing (e.g., sleep, meditation, focus modes).
Smooth and responsive UI for a calming user experience.
Background audio support for continuous playback.
            
            What I learned from the project:
            Gained strong experience in handling audio playback in React Native.
Learned to integrate and manage external APIs efficiently.
Improved skills in state management for real-time audio control.
Implemented custom looping and scheduling logic for media playback.
Enhanced understanding of user experience design for wellness apps.
Worked with background processes and performance optimization.
Strengthened debugging skills for media-related edge cases.
            
			.`,
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
			{
				name: "Music Integration",
				color: "orange-text-gradient",
			},
			{
				name: "Stripe Payment",
				color: "pink-text-gradient",
			},
		],
		image: relaxImg,
		source_code_link: "https://github.com/Waqas4hmad/RelaxSensation",
		live_link:
			"https://apps.apple.com/gb/app/relax-sensation/id1587345725",
	},


	{
		name: "Restuerant Ordering App",
		description: `
		As one of my early projects during my bachelor’s degree, I designed and developed a fully functional restaurant ordering application using React Native. This project helped me build a strong foundation in mobile app development and user experience design.
           My Responsibilities:

Developed cross-platform UI using React Native (vwersion 0.55).
Implemented state management for cart and user sessions.
Integrated APIs for menu data and payment processing.
Ensured responsive design and smooth user experience .
		
		What I learned from the project:
Core fundamentals of React Native development
Handling user authentication and app state
Integrating third-party APIs (especially payments)
Building scalable and maintainable mobile app architecture
           `,
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "Restapi",
				color: "green-text-gradient",
			},
			{
				name: "Redux",
				color: "orange-text-gradient",
			},
			{
				name: "Stripe Payment",
				color: "pink-text-gradient",
			},
		],
		image: restuImg,
		source_code_link: "https://github.com/Waqas4hmad/React-Native-Restaurant-App",
	},
	// {
	// 	name: "QR Code Scanner",
	// 	description: `The project is a QR code scanner built using the react-native-vision-camera library in a React Native application. The app allows users to use their device's camera to scan QR codes and then view the details encoded within the QR code.

	//         What I learned from the project:

	//         QR Code Scanning in React Native: I gained hands-on experience with integrating the react-native-vision-camera library to enable QR code scanning within a React Native application.

	//         Camera Access and Permissions: I learned how to request camera access permissions from the user and how to work with the device's camera for capturing video frames.

	//         QR Code Recognition: I discovered how to use the QR code recognition capabilities of react-native-vision-camera to detect and decode QR codes from the captured video frames.`,
	// 	tags: [
	// 		{
	// 			name: "Reactnative",
	// 			color: "blue-text-gradient",
	// 		},
	// 	],
	// 	image: "",
	// 	source_code_link: "https://github.com/johnnithin08/react-native-scan",
	// },
];

export { experiences, projects, services, technologies };
