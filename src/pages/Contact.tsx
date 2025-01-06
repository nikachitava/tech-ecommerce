import ContactSendEmailForm from "@/components/custom/ContactSendEmailForm";

const Contact = () => {
	return (
		<div className="container min-h-[60vh]">
			<section className="flex gap-20 mt-[180px]">
				<div className="flex  flex-col flex-2 bg-secondary1 py-10 px-9 space-y-16">
					<div className="">
						<div className="flex items-center gap-4">
							<div className="bg-secondary2 p-1 rounded-full">
								<img
									src="/icons/call.svg"
									alt="call_icon"
									loading="lazy"
									className="filter brightness-0 invert"
								/>
							</div>
							<h1 className="font-roboto font-medium">
								Call To Us
							</h1>
						</div>
						<p className="font-roboto text-sm text-text2 mt-6 mb-4">
							We are available 24/7, 7 days a week.
						</p>
						<p className="font-roboto text-sm text-text2">
							Phone: +8801611112222
						</p>
					</div>
					<hr className="w-full bg-black h-1" />
					<div className="">
						<div className="flex items-center gap-4">
							<div className="bg-secondary2 p-1 rounded-full">
								<img
									src="/icons/mail.svg"
									alt="call_icon"
									loading="lazy"
									className="filter brightness-0 invert"
								/>
							</div>
							<h1 className="font-roboto font-medium">
								Call To Us
							</h1>
						</div>
						<p className="font-roboto text-sm text-text2 mt-6 mb-4">
							Fill out our form and we will contact you within 24
							hours.
						</p>
						<p className="font-roboto text-sm text-text2 mb-4">
							Emails: customer@exclusive.com
						</p>
						<p className="font-roboto text-sm text-text2">
							Emails: support@exclusive.com
						</p>
					</div>
				</div>
				<ContactSendEmailForm />
			</section>
		</div>
	);
};

export default Contact;
