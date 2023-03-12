import { useState } from "react";

interface TermsConditionType {
    showTerms: any,
    setShowTerms: any,
}

const TermsConditions:React.FC<TermsConditionType> = ({setShowTerms, showTerms}) => {
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={` ${showTerms?'opacity-1':'opacity-0 pointer-events-none'} fixed top-0 left-0 w-full h-[calc(100vh)] pt-[60px] flex justify-center items-center overflow-x-hidden transition-all duration-300 box-border bg-[black] z-40`}>
        <div className="w-full md:w-[300px] h-[90%] rounded-lg flex flex-col justify-between items-center border border-solid border-gray-700">
            <div className="w-full h-12 px-5 font-semibold text-white flex justify-start items-center border-b border-solid border-gray-800">
                Terms and Conditions
            </div>
            <div className="px-3 flex flex-col justify-start text-gray-400 h-3/4 overflow-scroll">
            Please read these terms and conditions ("terms and conditions", "terms") carefully before using [website URL] website (“website”, "service") operated by [company name] ("us", 'we", "our").
            Conditions of use <br/><br/>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. [company name] only grants use and access of this website, its products, and its services to those who have accepted its terms.
            <br/><br/><b>Privacy policy</b><br/>
            Before you continue using our website, we advise you to read our privacy policy [link to privacy policy] regarding our user data collection. It will help you better understand our practices.
            <br/><br/><b>Age restriction</b><br/>
            You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. [company name] assumes no responsibility for liabilities related to age misrepresentation.
            <br/><br/><b>Intellectual property</b><br/>
            You agree that all materials, products, and services provided on this website are the property of [company name], its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the [company name]’s intellectual property in any way, including electronic, digital, or new trademark registrations.
            You grant [company name] a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
            <br/><br/><b>User accounts</b><br/>
            As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.
            If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.
            We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.
            <br/><br/><b>Applicable law</b><br/>
            By using this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between [company name] and you, or its business partners and associates.
            <br/><br/><b>Disputes</b><br/>
            Any dispute related in any way to your use of this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.
            <br/><br/><b>Indemnification</b><br/>
            You agree to indemnify [company name] and its affiliates and hold [company name] harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel. oiiiii, en pondattiiyee, unakku intha project pudichirundhuchinaahh enakku thousand ummahs tharanum lips la nalla tight ah katikittuuu.
            Any dispute related in any way to your use of this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.
            <br/><br/><b>Limitation on liability</b><br/>
            [company name] is not liable for any damages that may occur to you as a result of your misuse of our website.
            [company name] reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between [company name] and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
            <br/><br/><b>Applicable law</b><br/>
            By using this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between [company name] and you, or its business partners and associates.
            </div>
            <div className="w-full h-28 md:h-16 px-5 text-white flex flex-col justify-evenly items-center border-b border-solid border-gray-800">
                <div className="w-full text-sm flex items-center text-white">
                    <label className="flex items-center">
                        <input 
                            type={"checkbox"}
                            checked={checked}
                            onChange={handleChange} 
                            className="cursor-pointer"
                        />
                        &nbsp;I agree to the terms and conditions
                    </label>
                </div>
                <button onClick={()=>{(checked)?setShowTerms(false):''}} className="px-5 py-2 md:py-0 md:px-3 outline outline-1 outline-gray-700 rounded-lg">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default TermsConditions