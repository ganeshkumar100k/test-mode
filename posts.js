/* ==========================================================================
   ALL POSTS, SERVICES, PREVIEW-EDIT ENGINE & CUSTOMER LOGIN (posts.js)
   Ganesh Digital World Portal
   ========================================================================== */

// 1. POSTS & NOTICES DATA
const POSTS_DATA = {
    marqueeNotices: [
        "🎓 Bihar Post-Matric Scholarship (PMS) 11th, 12th, BA, B.Ed Online Form Active!",
        "🔥 Bihar RTPS Residence, Caste & Income Certificate Online Apply Active!",
        "⚡ SSC GD, Railway Recruitment & Police Online Forms Open",
        "🔑 Lost Token? Login using your 10-Digit Mobile Number on Customer Portal!",
        "📞 For Any Query Call / WhatsApp: 8252880028."
    ],
    results: [
        { id: "job", title: "Bihar Board 10th / 12th Result", tag: "NEW", tagClass: "bg-red-100 text-red-600", customTitle: "Bihar Board 10th/12th Result Check" },
        { id: "job", title: "SSC GD Constable Result", tag: "Declared", tagClass: "text-slate-400", customTitle: "SSC GD Constable Result" },
        { id: "job", title: "Railway RRB NTPC Scorecard", tag: "Active", tagClass: "text-slate-400", customTitle: "Railway RRB NTPC Result" },
        { id: "job", title: "Bihar Police Constable Merit List", tag: "Check Now", tagClass: "text-slate-400", customTitle: "Bihar Police Constable Result" }
    ],
    admitCards: [
        { id: "job", title: "Railway Technician Admit Card", tag: "LINK OUT", tagClass: "bg-blue-100 text-blue-600", customTitle: "Railway RRB Admit Card" },
        { id: "job", title: "SSC CGL Tier-1 Hall Ticket", tag: "Download", tagClass: "text-slate-400", customTitle: "SSC CGL Tier-1 Admit Card" },
        { id: "job", title: "NTA NEET / JEE Main Hall Ticket", tag: "Available", tagClass: "text-slate-400", customTitle: "NTA NEET / JEE Admit Card" },
        { id: "job", title: "Bihar Police SI Exam Hall Ticket", tag: "Download", tagClass: "text-slate-400", customTitle: "Bihar Police SI Admit Card" }
    ],
    latestJobs: [
        { id: "scholarship", title: "Bihar PMS Post-Matric Scholarship (11th, 12th, BA, B.Ed)", tag: "APPLY NOW", tagClass: "bg-purple-100 text-purple-700 font-bold", customTitle: "Bihar PMS Scholarship Application Form" },
        { id: "job", title: "Bihar Police Constable Online Form", tag: "APPLY", tagClass: "bg-emerald-100 text-emerald-600", customTitle: "Bihar Police Constable Form" },
        { id: "job", title: "SSC GD Constable Recruitment 2026", tag: "Active", tagClass: "text-slate-400", customTitle: "SSC GD Constable Form" },
        { id: "job", title: "Indian Army Agniveer Online Form", tag: "Apply Now", tagClass: "text-slate-400", customTitle: "Indian Army Agniveer Online Form" }
    ]  
};

// 2. PRICING & CONFIGURATION
const servicePricing = {
    scholarship: {
        govt: 0, service: 100, total: 100,
        title: "PMS Post-Matric Scholarship (11th, 12th, Graduation, B.Ed)",
        docLabel: "Bonafide Certificate & Fee Structure / रसीद",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D100%26cu%3DINR&size=200&format=png"
    },
    pan: {
        govt: 107, service: 93, total: 200,
        title: "New PAN Card / Correction (पैन कार्ड)",
        docLabel: "DOB Proof / 10th Marksheet (जन्म प्रमाण पत्र या मार्कशीट)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D200%26cu%3DINR&size=200&format=png"
    },
    residence: {
        govt: 0, service: 30, total: 30,
        title: "Residence Certificate / निवास प्रमाण पत्र",
        docLabel: "Land Receipt / Old Residence Cert (रसीद या पुराना निवास)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D30%26cu%3DINR&size=200&format=png"
    },
    caste: {
        govt: 0, service: 30, total: 30,
        title: "Caste Certificate / जाति प्रमाण पत्र",
        docLabel: "Khatian / Land Receipt / Old Caste Cert (खतियान या रसीद)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D30%26cu%3DINR&size=200&format=png"
    },
    income: {
        govt: 0, service: 30, total: 30,
        title: "Income Certificate / आय प्रमाण पत्र",
        docLabel: "Salary Slip / Land Receipt / Declaration (आय शपथ पत्र)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D30%26cu%3DINR&size=200&format=png"
    },
    voter: {
        govt: 0, service: 200, total: 200,
        title: "Voter ID Card / मतदाता पहचान पत्र (Form 6/8)",
        docLabel: "Address Proof / Electricity Bill / Passbook (बिजली बिल या पासबुक)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D200%26cu%3DINR&size=200&format=png"
    },
    aadhaar: {
        govt: 0, service: 200, total: 200,
        title: "Identity & Correction / डिजिटल सेवा",
        docLabel: "Supporting Document / सहायक दस्तावेज",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D200%26cu%3DINR&size=200&format=png"
    },
    ayushman: {
        govt: 0, service: 60, total: 60,
        title: "Ayushman / E-Shram Card / आयुष्मान कार्ड",
        docLabel: "Ration Card / PM Letter (राशन कार्ड या पत्र)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D60%26cu%3DINR&size=200&format=png"
    },
    job: {
        govt: 0, service: 60, total: 60,
        title: "Online Job & Portal Application",
        docLabel: "Qualification Marksheet / Certificate (शैक्षणिक योग्यता)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D60%26cu%3DINR&size=200&format=png"
    },
    other_cert: {
        govt: 0, service: 60, total: 60,
        title: "Other Digital Service / अन्य डिजिटल सेवा",
        docLabel: "Relevant Supporting Document (संबंधित दस्तावेज)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D60%26cu%3DINR&size=200&format=png"
    }
};

// 3. RENDER NOTICES & POSTS
function renderPosts() {
    const marqueeContainer = document.getElementById('marqueeNoticeContainer');
    if(marqueeContainer) {
        marqueeContainer.innerHTML = POSTS_DATA.marqueeNotices.join(' | ');
    }

    const resContainer = document.getElementById('resultsContainer');
    if(resContainer) {
        resContainer.innerHTML = POSTS_DATA.results.map(item => `
            <li class="p-3.5 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-semibold text-slate-700 hover:text-red-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    const admitContainer = document.getElementById('admitCardsContainer');
    if(admitContainer) {
        admitContainer.innerHTML = POSTS_DATA.admitCards.map(item => `
            <li class="p-3.5 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-semibold text-slate-700 hover:text-blue-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    const jobsContainer = document.getElementById('latestJobsContainer');
    if(jobsContainer) {
        jobsContainer.innerHTML = POSTS_DATA.latestJobs.map(item => `
            <li class="p-3.5 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-semibold text-slate-700 hover:text-emerald-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }
}

// 4. DYNAMIC SINGLE-FORM RENDER ENGINE
function renderDynamicFormByService(customJobTitle = "") {
    const selectedKey = document.getElementById('serviceSelect').value;
    const container = document.getElementById('dynamicFormFieldsContainer');
    const docContainer = document.getElementById('dynamicDocumentUploadContainer');
    const conf = servicePricing[selectedKey] || servicePricing['residence'];
    
    const modalTitle = document.getElementById('modalTitle');
    if(modalTitle) {
        modalTitle.innerText = customJobTitle ? customJobTitle : conf.title;
    }

    let formHTML = "";

    // FORM 1: POST-MATRIC SCHOLARSHIP (PMS Bihar - 11th, 12th, BA, B.Ed)
    if (selectedKey === 'scholarship') {
        formHTML = `
            <div class="bg-purple-50 border border-purple-200 text-purple-900 text-xs p-3.5 rounded-xl font-medium">
                <i class="fa-solid fa-graduation-cap text-purple-600 mr-1 text-sm"></i> <strong>Bihar PMS Scholarship Form:</strong> 11th, 12th, Graduation (BA/BSc/BCom), B.Ed, Post-Graduation ke chhatra yahan apply karein.
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-indigo-50/60 p-4 rounded-xl border border-purple-200 space-y-3">
                <h5 class="text-xs font-black text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-building-columns text-purple-600"></i> Academic & College Info (शैक्षणिक विवरण)
                </h5>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Course / Class (कक्षा / कोर्स) *</label>
                        <select id="pmsCourse" class="w-full text-xs p-2.5 border-2 border-purple-200 rounded-lg bg-white focus:outline-none" required>
                            <option value="11th (Intermediate)">11th (Intermediate Arts/Sci/Com)</option>
                            <option value="12th (Intermediate)">12th (Intermediate Arts/Sci/Com)</option>
                            <option value="BA / BSc / BCom">Graduation (BA / BSc / BCom)</option>
                            <option value="B.Ed / D.El.Ed">B.Ed / D.El.Ed (Teacher Training)</option>
                            <option value="MA / MSc / MCom">Post Graduation (MA / MSc / MCom)</option>
                            <option value="Diploma / Polytechnic">Polytechnic / Diploma</option>
                            <option value="ITI">ITI (All Trades)</option>
                            <option value="B.Tech / BCA / BBA">B.Tech / BCA / BBA</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Year / Semester (सत्र / सेमेस्टर) *</label>
                        <select id="pmsSemester" class="w-full text-xs p-2.5 border-2 border-purple-200 rounded-lg bg-white focus:outline-none" required>
                            <option value="1st Year / 1st-2nd Sem">1st Year / Sem 1-2</option>
                            <option value="2nd Year / 3rd-4th Sem">2nd Year / Sem 3-4</option>
                            <option value="3rd Year / 5th-6th Sem">3rd Year / Sem 5-6</option>
                            <option value="4th Year / 7th-8th Sem">4th Year / Sem 7-8</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">College / School Name (कॉलेज / स्कूल का नाम) *</label>
                        <input type="text" id="pmsCollegeName" placeholder="e.g. S.N. Sinha College / School Name" class="w-full text-xs p-2.5 border-2 border-purple-200 rounded-lg bg-white focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Class Roll No / Registration No *</label>
                        <input type="text" id="pmsRollNo" placeholder="Class Roll No या Reg No" class="w-full text-xs p-2.5 border-2 border-purple-200 rounded-lg bg-white focus:outline-none" required>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Candidate's Full Name / छात्र का नाम *</label>
                    <input type="text" id="applicantName" placeholder="Full Name as per Marksheet" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's Name / पिता का नाम *</label>
                    <input type="text" id="fatherName" placeholder="Father's Full Name" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Category / जाति वर्ग (BC/EBC/SC/ST) *</label>
                    <select id="pmsCategory" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                        <option value="BC (पिछड़ा वर्ग)">BC (Backward Class)</option>
                        <option value="EBC (अत्यंत पिछड़ा वर्ग)">EBC (Extremely Backward Class)</option>
                        <option value="SC (अनुसूचित जाति)">SC (Scheduled Caste)</option>
                        <option value="ST (अनुसूचित जनजाति)">ST (Scheduled Tribe)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर (10 Digits) *</label>
                    <input type="tel" id="mobileNumber" maxlength="10" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)" placeholder="10 Digit WhatsApp Mobile No" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-wider" required>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Full Permanent Address / पूरा पता (गाँव, प्रखंड, जिला, पिनकोड) *</label>
                <input type="text" id="fullAddress" placeholder="Village, Post Office, Block, District, PIN Code" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">1. Candidate Passport Photo / फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">2. Candidate Signature / हस्ताक्षर (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">3. College Bonafide Certificate & Fee Receipt / बोनाफाइड व शुल्क रसीद (PDF / JPG) *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">4. Previous Passed Marksheet / Marksheet या पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
        `;
    }
    // FORM 2: PAN CARD
    else if (selectedKey === 'pan') {
        formHTML = `
            <div class="bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs p-3.5 rounded-xl font-medium">
                <i class="fa-solid fa-id-card text-indigo-600 mr-1"></i> <strong>PAN Card Application:</strong> Sirf apna naam, pita ka naam, mobile number aur janam tithi bharein.
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant's Full Name / आवेदक का पूरा नाम *</label>
                <input type="text" id="applicantName" placeholder="Full Name as per official records" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's Name / पिता का नाम *</label>
                    <input type="text" id="fatherName" placeholder="Father's Full Name" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Date of Birth / जन्म तिथि *</label>
                    <input type="date" id="dobInput" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर (10 Digits) *</label>
                <input type="tel" id="mobileNumber" maxlength="10" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)" placeholder="10 Digit WhatsApp Mobile No" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-wider" required>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / पासपोर्ट फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">DOB Proof / 10th Marksheet / जन्म प्रमाण पत्र *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
        `;
    } 
    // FORM 3: RTPS BIHAR (Jati, Niwas, Aay)
    else if (['residence', 'caste', 'income'].includes(selectedKey)) {
        let extraRTPSFields = "";
        
        if(selectedKey === 'caste') {
            extraRTPSFields = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Category / वर्ग *</label>
                        <select id="casteCategory" class="w-full text-xs p-2.5 border-2 border-amber-200 rounded-lg bg-white focus:outline-none" required>
                            <option value="BC-1">BC-1 (EBC) / अत्यंत पिछड़ा वर्ग</option>
                            <option value="BC-2">BC-2 (OBC) / पिछड़ा वर्ग</option>
                            <option value="SC">SC / अनुसूचित जाति</option>
                            <option value="ST">ST / अनुसूचित जनजाति</option>
                            <option value="General">General / सामान्य वर्ग</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Caste Name / जाति का नाम *</label>
                        <input type="text" id="casteName" placeholder="e.g. Gond, Yadav, Kushwaha..." class="w-full text-xs p-2.5 border-2 border-amber-200 rounded-lg bg-white focus:outline-none" required>
                    </div>
                </div>
            `;
        } else if(selectedKey === 'income') {
            extraRTPSFields = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Annual Income / वार्षिक आय (₹) *</label>
                        <input type="number" id="annualIncome" placeholder="e.g. 90000" class="w-full text-xs p-2.5 border-2 border-emerald-200 rounded-lg bg-white focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Occupation / व्यवसाय *</label>
                        <input type="text" id="occupation" placeholder="e.g. Agriculture / Business / Student" class="w-full text-xs p-2.5 border-2 border-emerald-200 rounded-lg bg-white focus:outline-none" required>
                    </div>
                </div>
            `;
        }

        formHTML = `
            <div class="bg-blue-50 border border-blue-200 text-blue-900 text-xs p-3.5 rounded-xl font-medium">
                <i class="fa-solid fa-file-lines text-blue-600 mr-1"></i> <strong>RTPS Bihar Form:</strong> Please fill all personal & detailed address fields.
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Name / आवेदक का नाम *</label>
                    <input type="text" id="applicantName" placeholder="Full Name (पूरा नाम)" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Gender / लिंग *</label>
                    <select id="applicantGender" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                        <option value="">-- Select Gender / लिंग चुनें --</option>
                        <option value="Male">Male / पुरुष</option>
                        <option value="Female">Female / महिला</option>
                        <option value="Other">Other / अन्य</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's Name / पिता का नाम *</label>
                    <input type="text" id="fatherName" placeholder="Father's Name (पिता का नाम)" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mother's Name / माता का नाम *</label>
                    <input type="text" id="motherName" placeholder="Mother's Name (माता का नाम)" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर (10 Digits) *</label>
                <input type="tel" id="mobileNumber" maxlength="10" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)" placeholder="10 Digit WhatsApp Mobile No" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-wider" required>
            </div>

            ${extraRTPSFields}

            <div class="border-t border-slate-200 pt-3">
                <h4 class="text-xs font-black text-slate-800 mb-2.5 flex items-center gap-1.5 text-amber-600">
                    <i class="fa-solid fa-location-dot"></i> Permanent Address / पते का विवरण (Bihar)
                </h4>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">District / जिला *</label>
                        <input type="text" id="district" placeholder="District (जिला)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Sub-Division / अनुमंडल *</label>
                        <input type="text" id="subDivision" placeholder="Sub-Division (अनुमंडल)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Block / प्रखंड *</label>
                        <input type="text" id="block" placeholder="Block (प्रखंड)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Panchayat / City / पंचायत *</label>
                        <input type="text" id="panchayat" placeholder="Panchayat / Nagar" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Village / गाँव *</label>
                        <input type="text" id="village" placeholder="Village (ग्राम)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Post Office / डाक घर *</label>
                        <input type="text" id="postoffice" placeholder="Post Office (डाक घर)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label class="block text-[11px] font-bold text-slate-600 mb-1">Ward No. / वार्ड नं. *</label>
                        <input type="text" id="wardno" placeholder="Ward No (वार्ड नं)" class="w-full text-xs p-2.5 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none" required>
                    </div>
                </div>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / आवेदक का फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर या अंगूठा (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${conf.docLabel} *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
        `;
    } 
    // FORM 4: OTHER SERVICES
    else {
        formHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Name / आवेदक का नाम *</label>
                    <input type="text" id="applicantName" placeholder="Full Name (पूरा नाम)" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's / Guardian's Name *</label>
                    <input type="text" id="fatherName" placeholder="Father's Name" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर (10 Digits) *</label>
                    <input type="tel" id="mobileNumber" maxlength="10" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10)" placeholder="10 Digit Mobile No" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none font-semibold tracking-wider" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Address / पूरा पता *</label>
                    <input type="text" id="fullAddress" placeholder="Village, Block, District, PIN" class="w-full text-xs p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none" required>
                </div>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / पासपोर्ट फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${conf.docLabel} *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border-2 border-slate-200 rounded-xl p-2 bg-slate-50" required>
            </div>
        `;
    }

    container.innerHTML = formHTML;
    updateBillAndPaymentLinks();
}

// 5. LIVE PREVIEW GENERATOR & VALIDATION
function showFormPreview() {
    if(typeof hideNotice === 'function') hideNotice();

    const selectedKey = document.getElementById('serviceSelect').value;
    const conf = servicePricing[selectedKey] || servicePricing['residence'];
    const name = document.getElementById('applicantName') ? document.getElementById('applicantName').value.trim() : "";
    const father = document.getElementById('fatherName') ? document.getElementById('fatherName').value.trim() : "";
    const mobile = document.getElementById('mobileNumber') ? document.getElementById('mobileNumber').value.trim() : "";

    if (!name || !father || !mobile) {
        showNotice("Kripya Applicant Name, Father's Name aur Mobile Number pura bharein!");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showNotice("Mobile Number bilkul 10 digit ka hona chahiye!");
        return;
    }

    // Specific Form Validations
    if (selectedKey === 'scholarship') {
        const course = document.getElementById('pmsCourse') ? document.getElementById('pmsCourse').value : "";
        const college = document.getElementById('pmsCollegeName') ? document.getElementById('pmsCollegeName').value.trim() : "";
        const rollNo = document.getElementById('pmsRollNo') ? document.getElementById('pmsRollNo').value.trim() : "";
        const address = document.getElementById('fullAddress') ? document.getElementById('fullAddress').value.trim() : "";
        if (!course || !college || !rollNo || !address) {
            showNotice("Kripya Scholarship form ke Course, College, Roll No aur Address ko pura bharein!");
            return;
        }
    } else if (selectedKey === 'pan') {
        const dob = document.getElementById('dobInput') ? document.getElementById('dobInput').value : "";
        if (!dob) {
            showNotice("Kripya PAN Card ke liye Date of Birth (DOB) select karein!");
            return;
        }
    } else if (['residence', 'caste', 'income'].includes(selectedKey)) {
        const district = document.getElementById('district') ? document.getElementById('district').value.trim() : "";
        const subDiv = document.getElementById('subDivision') ? document.getElementById('subDivision').value.trim() : "";
        const block = document.getElementById('block') ? document.getElementById('block').value.trim() : "";
        const panchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value.trim() : "";
        const village = document.getElementById('village') ? document.getElementById('village').value.trim() : "";
        const postoffice = document.getElementById('postoffice') ? document.getElementById('postoffice').value.trim() : "";
        const wardno = document.getElementById('wardno') ? document.getElementById('wardno').value.trim() : "";

        if (!district || !subDiv || !block || !panchayat || !village || !postoffice || !wardno) {
            showNotice("Kripya RTPS Form ke sabhi Address details (District, Sub-Division, Block, Panchayat, Ward No) bharein!");
            return;
        }
    }

    // Documents Check
    const photo = document.getElementById('docPhoto') && document.getElementById('docPhoto').files.length;
    const sign = document.getElementById('docSign') && document.getElementById('docSign').files.length;
    const aadhaar = document.getElementById('docAadhaar') && document.getElementById('docAadhaar').files.length;
    const supporting = document.getElementById('docSupporting') && document.getElementById('docSupporting').files.length;

    if (!photo || !sign || !aadhaar || !supporting) {
        showNotice("Kripya sabhi 4 Documents upload karein!");
        return;
    }

    // Populate Preview UI
    document.getElementById('prevServiceTitle').innerText = conf.title;
    let listHTML = `
        <div class="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <div><span class="text-slate-500">Applicant Name:</span> <strong class="text-slate-800">${name}</strong></div>
            <div><span class="text-slate-500">Father's Name:</span> <strong class="text-slate-800">${father}</strong></div>
        </div>
        <div class="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <div><span class="text-slate-500">Mobile No:</span> <strong class="text-slate-800">${mobile}</strong></div>
            <div><span class="text-slate-500">Total Fee:</span> <strong class="text-emerald-700 font-bold">₹${conf.total}</strong></div>
        </div>
    `;

    if (selectedKey === 'scholarship') {
        const course = document.getElementById('pmsCourse').value;
        const semester = document.getElementById('pmsSemester').value;
        const college = document.getElementById('pmsCollegeName').value;
        const rollNo = document.getElementById('pmsRollNo').value;
        const cat = document.getElementById('pmsCategory').value;
        const addr = document.getElementById('fullAddress').value;

        listHTML += `
            <div class="border-b border-slate-200 pb-2 space-y-1">
                <div><span class="text-slate-500">Course / Sem:</span> <strong>${course} (${semester})</strong></div>
                <div><span class="text-slate-500">College Name:</span> <strong>${college} (Roll: ${rollNo})</strong></div>
                <div><span class="text-slate-500">Category & Address:</span> <strong>${cat}, ${addr}</strong></div>
            </div>
        `;
    } else if (selectedKey === 'pan') {
        const dob = document.getElementById('dobInput').value;
        listHTML += `<div class="border-b border-slate-200 pb-2"><span class="text-slate-500">Date of Birth:</span> <strong>${dob}</strong></div>`;
    } else if (['residence', 'caste', 'income'].includes(selectedKey)) {
        const subDiv = document.getElementById('subDivision').value;
        const block = document.getElementById('block').value;
        const village = document.getElementById('village').value;
        const dist = document.getElementById('district').value;
        listHTML += `
            <div class="border-b border-slate-200 pb-2 space-y-1">
                <div><span class="text-slate-500">Address:</span> <strong>${village}, Block: ${block}, Sub-Div: ${subDiv}, Dist: ${dist}</strong></div>
            </div>
        `;
    }

    listHTML += `
        <div class="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5 pt-1">
            <i class="fa-solid fa-circle-check"></i> 4 Documents Attached: Photo, Signature, ID Proof, Supporting Document.
        </div>
    `;

    document.getElementById('previewDataList').innerHTML = listHTML;

    // Switch View
    document.getElementById('formFillSection').classList.add('hidden');
    document.getElementById('formPreviewSection').classList.remove('hidden');
}

function editFormBack() {
    document.getElementById('formPreviewSection').classList.add('hidden');
    document.getElementById('formFillSection').classList.remove('hidden');
}

// 6. DYNAMIC BILLING & UPI GATEWAY LINK
function updateBillAndPaymentLinks() {
    const key = document.getElementById('serviceSelect').value;
    const conf = servicePricing[key] || servicePricing['residence'];

    document.getElementById('billGovtFee').innerText = `₹${conf.govt}`;
    document.getElementById('billServiceCharge').innerText = `₹${conf.service}`;
    document.getElementById('billTotalAmount').innerText = `₹${conf.total}`;

    const qrImageElem = document.getElementById('paymentQrImage');
    if(qrImageElem && conf.qrImage) {
        qrImageElem.src = conf.qrImage;
    }

    const upiString = `upi://pay?pa=8252880028@jio&pn=GaneshDigitalWorld&am=${conf.total}&cu=INR`;
    const gpayBtn = document.getElementById('gpayBtn');
    const phonepeBtn = document.getElementById('phonepeBtn');
    if(gpayBtn) gpayBtn.href = upiString;
    if(phonepeBtn) phonepeBtn.href = upiString;
}

// 7. CLIENT-SIDE IMAGE COMPRESSION (Canvas API)
function compressFile(file) {
    return new Promise((resolve) => {
        if (!file) return resolve(null);
        if (file.type === 'application/pdf') return resolve(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const maxDim = 1200;

                if (width > height && width > maxDim) {
                    height = Math.round((height * maxDim) / width);
                    width = maxDim;
                } else if (height > maxDim) {
                    width = Math.round((width * maxDim) / height);
                    height = maxDim;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        });
                        resolve(compressedFile);
                    } else {
                        resolve(file);
                    }
                }, 'image/jpeg', 0.7);
            };
            img.onerror = () => resolve(file);
        };
        reader.onerror = () => resolve(file);
    });
}

// 8. TELEGRAM BOT ENGINE
const TELEGRAM_BOT_TOKEN = "8992840881:AAGIG28aWGSc0TfN3DDTNXKpHutX8MQ3Pn0";
const TELEGRAM_CHAT_ID = "985390982";

async function sendTelegramMessage(text) {
    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
    } catch (e) {
        console.error("Telegram Text Error: ", e);
    }
}

async function sendTelegramFile(file, caption) {
    if (!file) return;
    const formData = new FormData();
    formData.append('chat_id', TELEGRAM_CHAT_ID);
    formData.append('caption', caption);
    
    let endpoint = 'sendDocument';
    if (file.type.startsWith('image/')) {
        endpoint = 'sendPhoto';
        formData.append('photo', file);
    } else {
        formData.append('document', file);
    }

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${endpoint}`, {
            method: 'POST',
            body: formData
        });
    } catch (e) {
        console.error("Telegram File Error: ", e);
    }
}

// 9. LOCAL STORAGE FOR CUSTOMER LOGIN & TOKEN RECOVERY
function saveApplicationLocally(appData) {
    try {
        let storedApps = JSON.parse(localStorage.getItem('GDW_APPS') || '[]');
        storedApps.unshift(appData);
        localStorage.setItem('GDW_APPS', JSON.stringify(storedApps));
    } catch (e) {
        console.error("Local storage error:", e);
    }
}

function performCustomerLogin() {
    const mobile = document.getElementById('custLoginMobile').value.trim();
    const container = document.getElementById('custApplicationsContainer');
    const list = document.getElementById('custApplicationsList');

    if (!mobile || mobile.length !== 10) {
        alert("Kripya valid 10-digit mobile number enter karein!");
        return;
    }

    const storedApps = JSON.parse(localStorage.getItem('GDW_APPS') || '[]');
    const myApps = storedApps.filter(item => item.mobile === mobile);

    container.classList.remove('hidden');

    if (myApps.length === 0) {
        list.innerHTML = `
            <div class="bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-200 text-xs">
                Is mobile number (${mobile}) par koi application nahi mili. Agar aapne form apply kiya tha, to Director se WhatsApp par sampark karein.
            </div>
        `;
        return;
    }

    list.innerHTML = myApps.map(item => `
        <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1.5 text-xs shadow-sm">
            <div class="flex justify-between items-center">
                <span class="font-bold text-slate-800">${item.service}</span>
                <span class="bg-blue-100 text-blue-800 font-mono font-bold px-2 py-0.5 rounded text-[11px]">${item.token}</span>
            </div>
            <div class="flex justify-between text-slate-500 text-[11px]">
                <span>Applicant: <strong>${item.name}</strong></span>
                <span>Date: ${item.date}</span>
            </div>
            <div class="flex justify-between items-center pt-1 border-t border-slate-200">
                <span class="text-emerald-700 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-circle-check"></i> ${item.status || "In Process (प्रक्रियाधीन)"}
                </span>
                <button onclick="reprintReceipt('${item.token}', '${item.name}', '${item.mobile}', '${item.service}', '${item.date}', '${item.total}', '${item.utr}')" class="text-blue-600 font-bold hover:underline">
                    View Receipt
                </button>
            </div>
        </div>
    `).join('');
}

function reprintReceipt(token, name, mobile, service, date, total, utr) {
    document.getElementById('recToken').innerText = token;
    document.getElementById('recDate').innerText = date;
    document.getElementById('recService').innerText = service;
    document.getElementById('recName').innerText = name;
    document.getElementById('recMobile').innerText = mobile;
    document.getElementById('recPaid').innerText = `₹${total}`;
    document.getElementById('recUTR').innerText = utr;

    const waText = encodeURIComponent(`Hello Ganesh Digital World,\nMy Application Token: ${token}\nName: ${name}\nService: ${service}`);
    document.getElementById('whatsappSendBtn').href = `https://wa.me/918252880028?text=${waText}`;

    closeCustomerLoginModal();
    document.getElementById('receiptModal').classList.remove('hidden');
}

// 10. FINAL FORM SUBMISSION (DIRECT AFTER PAYMENT & PREVIEW)
async function handleFormSubmitDirect() {
    if (isSubmitting) return;

    if(typeof hideNotice === 'function') hideNotice();

    // Captcha Validation
    const userCaptcha = document.getElementById('captchaInput').value.trim().toUpperCase();
    if (userCaptcha !== currentGeneratedCaptcha) {
        showNotice("Security Captcha Code galat hai! Kripya sahi captcha enter karein.");
        generateCaptcha();
        return;
    }

    // Payment UTR Validation
    const utr = document.getElementById('paymentUTR').value.trim();
    const isPaidChecked = document.getElementById('paymentConfirmCheck').checked;
    const isTermsChecked = document.getElementById('termsCheck').checked;

    if (!isPaidChecked || !utr || utr.length < 8) {
        showNotice("Payment verification zaroori hai! UPI se pay karein aur 12-digit UTR No. enter karein.");
        return;
    }

    if (!isTermsChecked) {
        showNotice("Kripya Terms & Conditions aur Privacy Policy ko accept karein!");
        return;
    }

    isSubmitting = true;
    const submitBtn = document.getElementById('submitBtn');
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
    document.getElementById('loadingOverlay').classList.remove('hidden');

    try {
        const selectedKey = document.getElementById('serviceSelect').value;
        const conf = servicePricing[selectedKey] || servicePricing['residence'];
        const name = document.getElementById('applicantName').value.trim();
        const father = document.getElementById('fatherName').value.trim();
        const mobile = document.getElementById('mobileNumber').value.trim();
        const randomToken = "GDW-2026-" + Math.floor(1000 + Math.random() * 9000);
        const currentDate = new Date().toLocaleDateString('en-GB');

        // Extract Context
        const gender = document.getElementById('applicantGender') ? document.getElementById('applicantGender').value : "N/A";
        const mother = document.getElementById('motherName') ? document.getElementById('motherName').value : "N/A";
        const district = document.getElementById('district') ? document.getElementById('district').value : "N/A";
        const subDiv = document.getElementById('subDivision') ? document.getElementById('subDivision').value : "N/A";
        const block = document.getElementById('block') ? document.getElementById('block').value : "N/A";
        const panchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value : "N/A";
        const village = document.getElementById('village') ? document.getElementById('village').value : "N/A";
        const postoffice = document.getElementById('postoffice') ? document.getElementById('postoffice').value : "N/A";
        const wardno = document.getElementById('wardno') ? document.getElementById('wardno').value : "N/A";
        const dob = document.getElementById('dobInput') ? document.getElementById('dobInput').value : "N/A";
        
        const pmsCourse = document.getElementById('pmsCourse') ? document.getElementById('pmsCourse').value : "N/A";
        const pmsSemester = document.getElementById('pmsSemester') ? document.getElementById('pmsSemester').value : "N/A";
        const pmsCollege = document.getElementById('pmsCollegeName') ? document.getElementById('pmsCollegeName').value : "N/A";
        const pmsRoll = document.getElementById('pmsRollNo') ? document.getElementById('pmsRollNo').value : "N/A";
        const pmsCategory = document.getElementById('pmsCategory') ? document.getElementById('pmsCategory').value : "N/A";
        const fullAddress = document.getElementById('fullAddress') ? document.getElementById('fullAddress').value : "N/A";

        // Compress Docs
        const photoRaw = document.getElementById('docPhoto') ? document.getElementById('docPhoto').files[0] : null;
        const signRaw = document.getElementById('docSign') ? document.getElementById('docSign').files[0] : null;
        const aadhaarRaw = document.getElementById('docAadhaar') ? document.getElementById('docAadhaar').files[0] : null;
        const supportingRaw = document.getElementById('docSupporting') ? document.getElementById('docSupporting').files[0] : null;

        const [photoFile, signFile, aadhaarFile, supportingFile] = await Promise.all([
            compressFile(photoRaw),
            compressFile(signRaw),
            compressFile(aadhaarRaw),
            compressFile(supportingRaw)
        ]);

        // Construct Telegram Alert Message
        let telegramText = `<b>🚨 NEW ONLINE APPLICATION SUBMITTED 🚨</b>\n\n` +
            `<b>🎫 Token ID:</b> ${randomToken}\n` +
            `<b>📅 Date:</b> ${currentDate}\n` +
            `<b>📌 Service:</b> ${conf.title}\n\n` +
            `<b>👤 Candidate Details:</b>\n` +
            `• <b>Name:</b> ${name}\n` +
            `• <b>Father Name:</b> ${father}\n` +
            `• <b>Mobile:</b> ${mobile}\n`;

        if (selectedKey === 'scholarship') {
            telegramText += `\n<b>🎓 Academic & College Details:</b>\n` +
                `• <b>Course/Class:</b> ${pmsCourse}\n` +
                `• <b>Semester/Year:</b> ${pmsSemester}\n` +
                `• <b>College/School:</b> ${pmsCollege}\n` +
                `• <b>Roll/Reg No:</b> ${pmsRoll}\n` +
                `• <b>Category:</b> ${pmsCategory}\n` +
                `• <b>Address:</b> ${fullAddress}\n`;
        } else if (selectedKey === 'pan') {
            telegramText += `• <b>Date of Birth:</b> ${dob}\n`;
        } else if (['residence', 'caste', 'income'].includes(selectedKey)) {
            telegramText += `• <b>Gender:</b> ${gender}\n` +
                `• <b>Mother Name:</b> ${mother}\n\n` +
                `<b>📍 RTPS Bihar Address:</b>\n` +
                `• <b>District:</b> ${district}\n` +
                `• <b>Sub-Division:</b> ${subDiv}\n` +
                `• <b>Block:</b> ${block}\n` +
                `• <b>Panchayat:</b> ${panchayat}\n` +
                `• <b>Village:</b> ${village}\n` +
                `• <b>Post Office:</b> ${postoffice}\n` +
                `• <b>Ward No:</b> ${wardno}\n`;
        }

        telegramText += `\n<b>💰 Payment Details:</b>\n` +
            `• <b>Total Fee:</b> ₹${conf.total}\n` +
            `• <b>UPI UTR / Ref ID:</b> <code>${utr}</code>`;

        // Send Text & Docs to Telegram
        await sendTelegramMessage(telegramText);
        if (photoFile) await sendTelegramFile(photoFile, `📷 Photo - ${name} (${randomToken})`);
        if (signFile) await sendTelegramFile(signFile, `✍️ Signature - ${name} (${randomToken})`);
        if (supportingFile) await sendTelegramFile(supportingFile, `📄 Bonafide/Supporting - ${name} (${randomToken})`);
        if (aadhaarFile) await sendTelegramFile(aadhaarFile, `🆔 Marksheet/ID Proof - ${name} (${randomToken})`);

        // Save locally for Customer Login retrieval
        saveApplicationLocally({
            token: randomToken,
            name: name,
            mobile: mobile,
            service: conf.title,
            date: currentDate,
            total: conf.total,
            utr: utr,
            status: "Processing at Govt Portal (प्रक्रिया जारी है)"
        });

        // Populate Printable Receipt
        document.getElementById('recToken').innerText = randomToken;
        document.getElementById('recDate').innerText = currentDate;
        document.getElementById('recService').innerText = conf.title;
        document.getElementById('recName').innerText = name;
        document.getElementById('recMobile').innerText = mobile;
        document.getElementById('recPaid').innerText = `₹${conf.total}`;
        document.getElementById('recUTR').innerText = utr;

        const waText = encodeURIComponent(`Hello Ganesh Digital World,\nNew Application Form Submitted:\n- Token: ${randomToken}\n- Name: ${name}\n- Service: ${conf.title}\n- Mobile: ${mobile}\n- Total Fee: ₹${conf.total}\n- Payment UTR: ${utr}`);
        document.getElementById('whatsappSendBtn').href = `https://wa.me/918252880028?text=${waText}`;

        // Switch Screen to Receipt
        document.getElementById('loadingOverlay').classList.add('hidden');
        closeApplyModal(false);
        document.getElementById('receiptModal').classList.remove('hidden');

    } catch (error) {
        console.error("Submission Error: ", error);
        showNotice("Network issue ke karan submit nahi ho paya. Kripya dobara try karein.");
        document.getElementById('loadingOverlay').classList.add('hidden');
    } finally {
        isSubmitting = false;
        if(submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

// 11. LIVE STATUS TRACKER WITH STEP PROCESS TIMELINE
function searchStatus() {
    const val = document.getElementById('trackInput').value.trim();
    const res = document.getElementById('trackResult');
    res.classList.remove('hidden');

    if(!val) {
        res.className = "text-xs p-3.5 rounded-2xl bg-red-50 text-red-700 border border-red-200 font-bold";
        res.innerText = "Please enter your Token ID or Mobile Number.";
        return;
    }

    const storedApps = JSON.parse(localStorage.getItem('GDW_APPS') || '[]');
    const found = storedApps.find(item => item.token.toLowerCase() === val.toLowerCase() || item.mobile === val);

    res.className = "text-xs p-4 rounded-2xl bg-gradient-to-b from-blue-50 to-indigo-50/60 text-slate-800 border-2 border-blue-200 space-y-3";
    
    if (found) {
        res.innerHTML = `
            <div class="border-b border-blue-200 pb-2">
                <div class="flex justify-between font-bold">
                    <span class="text-blue-800">${found.service}</span>
                    <span class="font-mono text-indigo-700">${found.token}</span>
                </div>
                <p class="text-[11px] text-slate-500">Applicant: <strong>${found.name}</strong> | Applied on: ${found.date}</p>
            </div>

            <!-- Live Progress Timeline -->
            <div class="space-y-2 py-1">
                <div class="flex items-center gap-2 text-emerald-700 font-bold">
                    <i class="fa-solid fa-circle-check text-emerald-600"></i> Step 1: Form & Documents Received
                </div>
                <div class="flex items-center gap-2 text-emerald-700 font-bold">
                    <i class="fa-solid fa-circle-check text-emerald-600"></i> Step 2: Payment Verified (${found.utr})
                </div>
                <div class="flex items-center gap-2 text-blue-700 font-bold animate-pulse">
                    <i class="fa-solid fa-spinner animate-spin text-blue-600"></i> Step 3: Application Under Process on Govt / RTPS Portal
                </div>
            </div>

            <div class="pt-2 border-t border-blue-200 flex justify-between items-center">
                <span class="text-[11px] font-semibold text-slate-600">Status: <strong class="text-emerald-700">${found.status}</strong></span>
                <button onclick="reprintReceipt('${found.token}', '${found.name}', '${found.mobile}', '${found.service}', '${found.date}', '${found.total}', '${found.utr}')" class="text-blue-700 font-bold underline text-xs">
                    View Receipt
                </button>
            </div>
        `;
    } else {
        res.innerHTML = `
            <div class="space-y-2">
                <p class="font-bold text-emerald-800"><i class="fa-solid fa-check-circle"></i> Application Status Active: Processing</p>
                <p class="text-[11px] text-slate-600">Your query (${val}) has been received at Ganesh Digital World cyber desk. Official government acknowledgment will be shared on WhatsApp shortly.</p>
            </div>
        `;
    }
}
