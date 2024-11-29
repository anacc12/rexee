import Header from "../components/Header";
import { Mail } from "react-feather";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import flashYellow from "../../src/assets/svg/flash-yellow.svg";

const TermsAndConditions = () => {
  return (
    <>
      <div className="w-screen h-[60vh] bg-light text-text-dark flex flex-col gap-10 justify-center items-center">
        <Header type="dark" />
        <h1 className="xs:text-[2.5rem] xs:leading-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] sm:leading-[4rem] lg:leading-[5rem] font-bold">
          Terms & Conditions
        </h1>
      </div>

      <div className="flex flex-col gap-10 py-12 max-w-[860px] mx-auto text-text-med xs:px-6 sm:px-6 lg:px-0">
        {/* INTRO */}
        <p>
          Welcome to Rexee, an application for market research and opinion
          surveys using virtual and augmented reality, owned by FFIND SRL. By
          using Rexee, you agree to comply with and be bound by the following
          Terms and Conditions. Please read them carefully.{" "}
        </p>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            1. General Information
          </h3>
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
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            2. Acceptance of Terms
          </h3>
          <p>
            By accessing and using Rexee, you agree to these Terms and
            Conditions, our Privacy Policy, and any other policies we may
            implement. If you do not agree, please do not use Rexee.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            3. User Accounts
          </h3>
          <p>
            To participate in surveys and earn Rexee points, you must create an
            account. You are responsible for maintaining the confidentiality of
            your account information and for all activities that occur under
            your account.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            4. Rexee Points
          </h3>
          <ul className="list-disc">
            <li>
              <strong>Earning Points: </strong>
              You can earn Rexee points by completing surveys and participating
              in other activities within the app.
            </li>
            <li>
              <strong>Validity: </strong>
              Rexee points are valid for 24 months from the date they are
              earned. Points not redeemed within this period will expire and be
              forfeited.
            </li>
            <li>
              <strong>Redemption: </strong>
              Rexee points can be redeemed for physical and virtual items,
              vouchers, and gift cards available in the in-app store. The
              selection of items available for redemption may vary and is
              subject to availability.
            </li>
            <li>
              <strong>Non-Transferable: </strong>
              Rexee points are non-transferable and cannot be exchanged for
              cash.
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            5. Use of the App
          </h3>
          <p>
            You agree to use Rexee only for lawful purposes and in accordance
            with these Terms and Conditions. You must not:
          </p>
          <ul className="list-disc">
            <li>
              Use the app in any way that violates any applicable local,
              national, or international law or regulation.{" "}
            </li>
            <li>
              Use the app to transmit any unsolicited or unauthorized
              advertising or promotional material.{" "}
            </li>
            <li>
              Engage in any conduct that restricts or inhibits anyone's use or
              enjoyment of the app.{" "}
            </li>
          </ul>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            6. Intellectual Property
          </h3>
          <p>
            All content, features, and functionality on Rexee, including but not
            limited to text, graphics, logos, and software, are the property of
            FFIND SRL or its licensors and are protected by intellectual
            property laws. You may not use any content from the app without our
            express written permission.
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            7. Termination
          </h3>
          <p>
            FFIND SRL reserves the right to terminate or suspend your account
            and access to Rexee at our sole discretion, without notice, for
            conduct that we believe violates these Terms and Conditions or is
            harmful to other users, us, or third parties.{" "}
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            8. Disclaimer of Warranties
          </h3>
          <p>
            Rexee is provided on an "as is" and "as available" basis. FFIND SRL
            makes no representations or warranties of any kind, express or
            implied, regarding the operation of the app or the information,
            content, or materials included therein.
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            9. Limitation of Liability
          </h3>
          <p>
            To the fullest extent permitted by law, FFIND SRL shall not be
            liable for any damages of any kind arising from your use of Rexee,
            including but not limited to direct, indirect, incidental, punitive,
            and consequential damages.
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            10. Governing Law
          </h3>
          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of Italy. Any disputes arising out of or in
            connection with these Terms and Conditions shall be subject to the
            exclusive jurisdiction of the courts located in Palermo, Italy.
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            11. Changes to Terms and Conditions
          </h3>
          <p>
            We may update these Terms and Conditions from time to time. We will
            notify you of any changes by posting the new Terms and Conditions on
            this page. Your continued use of Rexee after any changes indicates
            your acceptance of the updated Terms and Conditions.
          </p>
        </div>

        <hr className="border-t-2 border-gray-light w-full" />

        <div className="flex flex-col gap-6">
          <h3 className="xs:text-[24px] sm:text-[32px] leading-[42px] font-bold xs:mb-1 sm:mb-6">
            11. Contact Us
          </h3>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:{" "}
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
          By using Rexee, you agree to these Terms and Conditions. Thank you for
          participating and contributing to our market research efforts.
        </p>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
