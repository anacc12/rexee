import Header from "../components/Header";
import { Mail } from "react-feather";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import flashYellow from "../../src/assets/svg/flash-yellow.svg";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="w-screen h-[60vh] bg-light text-text-dark flex flex-col gap-10 justify-center items-center">
        <Header type="dark" />
        <h1 className="text-[4.5rem] font-bold leading-[5rem]">
          Privacy Policy
        </h1>
      </div>

      <div className="flex flex-col gap-10 py-12 max-w-[860px] mx-auto text-text-med">
        {/* INTRO */}
        <p>
          Welcome to Rexee, an application dedicated to market research and
          opinion surveys using virtual and augmented reality, owned by FFIND
          SRL. We value your privacy and are committed to protecting your
          personal data. This Privacy Policy explains how we collect, use, and
          protect your information when you use our application, Rexee.
        </p>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            1. Data Controller
          </h3>
          <p>The data controller for Rexee is:</p>
          <ul className="list-disc">
            <li>FFIND SRL</li>
            <li>
              <strong>Address: </strong>Via Ercole Bernabei 51, 90145, Palermo,
              Italy
            </li>
            <li>
              <strong>VAT Number: </strong>02372540811
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            2. Data We Collect
          </h3>
          <p>
            When you use Rexee, we may collect the following types of data:{" "}
          </p>
          <ul className="list-disc">
            <li>
              <strong>Personal Identification Information: </strong>
              Name, email address, phone number, and any other personal
              information you provide.{" "}
            </li>
            <li>
              <strong>Usage Data: </strong>
              Information about how you interact with the app, including survey
              responses, user preferences, and engagement metrics.
            </li>
            <li>
              <strong>Device Information: </strong>
              Information about your device, including IP address, operating
              system, device identifiers, and network information.
            </li>
            <li>
              <strong>Location Data: </strong>
              Geographic location data, if you provide location-based services
              permissions.
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            3. How We Use Your Data
          </h3>
          <p>FFIND SRL uses the collected data for the following purposes:</p>
          <ul className="list-disc">
            <li>
              <strong>To Provide and Maintain Our Service: </strong>
              Ensuring the proper functioning of the app and delivering the
              services you request.
            </li>
            <li>
              <strong>To Improve Our Service: </strong>
              Analyzing usage patterns to enhance user experience and app
              performance.
            </li>
            <li>
              <strong>To Communicate with You: </strong>
              Sending notifications, updates, and promotional materials, with
              your consent.
            </li>
            <li>
              <strong>For Research and Analysis: </strong>
              Aggregating and anonymizing data to conduct market research and
              generate insights.
            </li>
            <li>
              <strong>To Ensure Security: </strong>
              Monitoring and protecting against fraudulent or unauthorized
              activities.
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            4. Legal Basis For Processing Data
          </h3>
          <p>
            We process your personal data based on the following legal grounds:{" "}
          </p>
          <ul className="list-disc">
            <li>
              <strong>Consent: </strong>
              When you have given us explicit consent to proces your data for
              specific purposes.
            </li>
            <li>
              <strong>Contractual Necessity: </strong>
              When data processing is required to fulfill our contractual
              obligations to you.
            </li>
            <li>
              <strong>Legitimate Interests: </strong>
              For our legitimate business interests, such as improving our
              services and ensuring security.
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            5. Data Sharing and Disclosure
          </h3>
          <p>
            We do not sell or share your personal data with third parties except
            in the following cases:{" "}
          </p>
          <ul className="list-disc">
            <li>
              <strong>Service Providers: </strong>
              We may share data with trusted third-party service providers who
              assist us in operating our app and conducting our business.
            </li>
            <li>
              <strong>Legal Requirements: </strong>
              We may disclose your data to comply with legal obligations, such
              as responding to legal requests and preventing fraud.
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            6. Data Security
          </h3>
          <p>
            We may share data with trusted third-party service providers who
            assist us in operating our app and conducting our business.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            7. Data Retention
          </h3>
          <p>
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy. When data is
            no longer needed, we securely delete or anonymize it.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            8. Your Rights
          </h3>
          <p>You have the following rights regarding your personal data: </p>
          <ul className="list-disc">
            <li>
              <strong>Access: </strong>
              You can request access to your data and obtain a copy.
            </li>
            <li>
              <strong>Correction: </strong>
              You can request the correction of inaccurate or incomplete data.
            </li>
            <li>
              <strong>Deletion: </strong>
              You can request the deletion of your data, subject to legal
              limitations.
            </li>
            <li>
              <strong>Objection: </strong>
              You can object to the processing of your data for specific
              purposes.
            </li>
            <li>
              <strong>Portability: </strong>
              You can request the transfer of your data to another service
              provider.
            </li>
          </ul>
          <p>To exercise your rights, please contact us at privacy@ffind.com</p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            9. Changes to This Privacy Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            Your continued use of the app after any changes indicates your
            acceptance of the updated Privacy Policy.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] leading-[42px] font-bold mb-6">
            10. Contact Us
          </h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:{" "}
          </p>
          <ul className="list-disc">
            <li>
              <strong>Email: </strong>
              privacy@ffind.com
            </li>
            <li>
              <strong>Address: </strong>
              Via Ercole Bernabei 51, 90145, Palermo, Italy
            </li>
          </ul>
        </div>
        <hr className="border-t-2 border-gray-light w-full" />
        <p>
          By using Rexee, you agree to the terms of this Privacy Policy. Thank
          you for trusting us with your data.{" "}
        </p>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
