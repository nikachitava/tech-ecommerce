import ContactSendEmailForm from "@/components/custom/ContactSendEmailForm";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="container px-4 md:px-6 min-h-[60vh] mb-20">
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-[100px] md:mt-[180px]"
			>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="flex flex-col flex-1 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg py-10 px-6 md:px-9 space-y-12"
				>
					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<div className="bg-purple-600 p-3 rounded-full transform transition-transform hover:scale-110">
								<img
									src="/icons/call.svg"
									alt="call_icon"
									loading="lazy"
									className="w-5 h-5 filter brightness-0 invert"
								/>
							</div>
							<h1 className="font-roboto font-medium text-xl">
								Call To Us
							</h1>
						</div>
						<div className="space-y-3">
							<p className="font-roboto text-sm text-gray-600 dark:text-gray-300">
								We are available 24/7, 7 days a week.
							</p>
							<p className="font-roboto text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
								Phone: +8801611112222
							</p>
						</div>
					</div>

					<hr className="w-full border-gray-200 dark:border-gray-700" />

					<div className="space-y-6">
						<div className="flex items-center gap-4">
							<div className="bg-purple-600 p-3 rounded-full transform transition-transform hover:scale-110">
								<img
									src="/icons/mail.svg"
									alt="email_icon"
									loading="lazy"
									className="w-5 h-5 filter brightness-0 invert"
								/>
							</div>
							<h1 className="font-roboto font-medium text-xl">
								Email Us
							</h1>
						</div>
						<div className="space-y-3">
							<p className="font-roboto text-sm text-gray-600 dark:text-gray-300">
								Fill out our form and we will contact you within
								24 hours.
							</p>
							<p className="font-roboto text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
								Emails: customer@exclusive.com
							</p>
							<p className="font-roboto text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
								Emails: support@exclusive.com
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="flex-1"
				>
					<ContactSendEmailForm />
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Contact;
