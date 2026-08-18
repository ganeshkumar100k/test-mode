/* ==========================================================================
   ALL POSTS, SERVICES & DYNAMIC MULTI-FORM ENGINE (posts.js)
   Ganesh Digital World Portal
   ========================================================================== */

// 1. POSTS & NOTICES DATA
const POSTS_DATA = {
    marqueeNotices: [
        "🔥 Bihar RTPS Residence, Caste & Income Certificate Online Apply Active!",
        "⚡ SSC GD, Railway Recruitment & Police Online Forms Open",
        "🎓 Bihar Post-Matric & NSP Scholarship Forms Filling Available Here!",
        "📞 For Any Query Call / WhatsApp: 8252880028.",
        "📲 Share this website with friends."
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
        { id: "job", title: "Bihar Police Constable Online Form", tag: "APPLY", tagClass: "bg-emerald-100 text-emerald-600", customTitle: "Bihar Police Constable Form" },
        { id: "job", title: "SSC GD Constable Recruitment 2026", tag: "Active", tagClass: "text-slate-400", customTitle: "SSC GD Constable Form" },
        { id: "job", title: "Indian Army Agniveer Online Form", tag: "Apply Now", tagClass: "text-slate-400", customTitle: "Indian Army Agniveer Online Form" },
        { id: "job", title: "Railway Group D Online Form", tag: "Apply Now", tagClass: "text-slate-400", customTitle: "Railway RRB Group D Form" }
    ]  
};

// 2. PRICING & CONFIGURATION
const servicePricing = {
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
        title: "Aadhaar Services / आधार सुधार व प्रिंट",
        docLabel: "Supporting Document / सहायक दस्तावेज",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D200%26cu%3DINR&size=200&format=png"
    },
    ayushman: {
        govt: 0, service: 60, total: 60,
        title: "Ayushman / E-Shram Card / आयुष्मान कार्ड",
        docLabel: "Ration Card / PM Letter (राशन कार्ड या पत्र)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D60%26cu%3DINR&size=200&format=png"
    },
    scholarship: {
        govt: 0, service: 100, total: 100,
        title: "Scholarship Form / छात्रवृत्ति आवेदन",
        docLabel: "Last Passed Marksheet & Fee Receipt (मार्कशीट व रसीद)",
        qrImage: "https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D8252880028%2540jio%26pn%3DGanesh%2520Digital%2520world%26am%3D100%26cu%3DINR&size=200&format=png"
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
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-red-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    const admitContainer = document.getElementById('admitCardsContainer');
    if(admitContainer) {
        admitContainer.innerHTML = POSTS_DATA.admitCards.map(item => `
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-blue-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }

    const jobsContainer = document.getElementById('latestJobsContainer');
    if(jobsContainer) {
        jobsContainer.innerHTML = POSTS_DATA.latestJobs.map(item => `
            <li class="p-3 hover:bg-slate-50 transition flex justify-between items-center cursor-pointer" onclick="openApplyModal('${item.id}', '${item.customTitle}')">
                <span class="font-medium text-slate-700 hover:text-emerald-600">${item.title}</span>
                <span class="${item.tagClass} text-[10px] font-bold px-2 py-0.5 rounded">${item.tag}</span>
            </li>
        `).join('');
    }
}

// 4. DYNAMIC MULTI-FORM RENDER ENGINE
function renderDynamicFormByService(customJobTitle = "") {
    const selectedKey = document.getElementById('serviceSelect').value;
    const container = document.getElementById('dynamicFormFieldsContainer');
    const docContainer = document.getElementById('dynamicDocumentUploadContainer');
    const conf = servicePricing[selectedKey] || servicePricing['residence'];
    
    // Update Modal Title
    const modalTitle = document.getElementById('modalTitle');
    if(modalTitle) {
        modalTitle.innerText = customJobTitle ? customJobTitle : conf.title;
    }

    let formHTML = "";

    // -------------------------------------------------------------
    // FORM 1: PAN CARD (Only Your Name, Father Name, Mobile Number, DOB)
    // -------------------------------------------------------------
    if (selectedKey === 'pan') {
        formHTML = `
            <div class="bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs p-3 rounded-lg">
                <i class="fa-solid fa-id-card mr-1"></i> <strong>PAN Card Application:</strong> Sirf apna naam, pita ka naam, mobile no aur janam tithi bharein.
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant's Full Name / आवेदक का पूरा नाम *</label>
                <input type="text" id="applicantName" placeholder="Full Name as per records" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's Name / पिता का नाम *</label>
                    <input type="text" id="fatherName" placeholder="Father's Full Name" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Date of Birth / जन्म तिथि *</label>
                    <input type="date" id="dobInput" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर *</label>
                <input type="tel" id="mobileNumber" pattern="[0-9]{10}" placeholder="10 Digit WhatsApp Mobile No" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required>
            </div>
        `;

        // Upload Requirements for PAN
        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / पासपोर्ट फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">DOB Proof / 10th Marksheet / जन्म प्रमाण पत्र *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
        `;
    } 
    // -------------------------------------------------------------
    // FORM 2: RTPS BIHAR (Jati, Niwas, Aay - Full Details Form)
    // -------------------------------------------------------------
    else if (['residence', 'caste', 'income'].includes(selectedKey)) {
        let extraRTPSFields = "";
        
        if(selectedKey === 'caste') {
            extraRTPSFields = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-amber-50/60 p-3 rounded-lg border border-amber-200">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Category / वर्ग *</label>
                        <select id="casteCategory" class="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-none" required>
                            <option value="BC-1">BC-1 (EBC) / अत्यंत पिछड़ा वर्ग</option>
                            <option value="BC-2">BC-2 (OBC) / पिछड़ा वर्ग</option>
                            <option value="SC">SC / अनुसूचित जाति</option>
                            <option value="ST">ST / अनुसूचित जनजाति</option>
                            <option value="General">General / सामान्य वर्ग</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Caste Name / जाति का नाम *</label>
                        <input type="text" id="casteName" placeholder="e.g. Gond, Yadav, Kushwaha..." class="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-none" required>
                    </div>
                </div>
            `;
        } else if(selectedKey === 'income') {
            extraRTPSFields = `
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-emerald-50/60 p-3 rounded-lg border border-emerald-200">
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Annual Income / वार्षिक आय (₹) *</label>
                        <input type="number" id="annualIncome" placeholder="e.g. 90000" class="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[11px] font-bold text-slate-700 mb-1">Occupation / व्यवसाय *</label>
                        <input type="text" id="occupation" placeholder="e.g. Agriculture / Business / Student" class="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-none" required>
                    </div>
                </div>
            `;
        }

        formHTML = `
            <div class="bg-blue-50 border border-blue-200 text-blue-900 text-xs p-3 rounded-lg">
                <i class="fa-solid fa-file-lines mr-1"></i> <strong>RTPS Bihar Form:</strong> Please fill all personal & detailed address fields.
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Name / आवेदक का नाम *</label>
                    <input type="text" id="applicantName" placeholder="Full Name (पूरा नाम)" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Gender / लिंग *</label>
                    <select id="applicantGender" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" required>
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
                    <input type="text" id="fatherName" placeholder="Father's Name (पिता का नाम)" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mother's Name / माता का नाम *</label>
                    <input type="text" id="motherName" placeholder="Mother's Name (माता का नाम)" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) / मोबाइल नंबर *</label>
                <input type="tel" id="mobileNumber" pattern="[0-9]{10}" placeholder="10 Digit WhatsApp Mobile No" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
            </div>

            ${extraRTPSFields}

            <!-- Complete Bihar Address Structure -->
            <div class="border-t border-slate-200 pt-3">
                <h4 class="text-xs font-bold text-slate-800 mb-2"><i class="fa-solid fa-location-dot text-amber-500 mr-1"></i> Address Details / पते का विवरण (Bihar)</h4>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">District / जिला *</label>
                        <input type="text" id="district" placeholder="District (जिला)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">Sub-Division / अनुमंडल *</label>
                        <input type="text" id="subDivision" placeholder="Sub-Division (अनुमंडल)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">Block / प्रखंड *</label>
                        <input type="text" id="block" placeholder="Block (प्रखंड)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">Panchayat / City / पंचायत *</label>
                        <input type="text" id="panchayat" placeholder="Panchayat / Nagar" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">Village / गाँव *</label>
                        <input type="text" id="village" placeholder="Village (ग्राम)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div>
                        <label class="block text-[11px] text-slate-600 mb-1">Post Office / डाक घर *</label>
                        <input type="text" id="postoffice" placeholder="Post Office (डाक घर)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label class="block text-[11px] text-slate-600 mb-1">Ward No. / वार्ड नं. *</label>
                        <input type="text" id="wardno" placeholder="Ward No (वार्ड नं)" class="w-full text-xs p-2 border border-slate-300 rounded-lg" required>
                    </div>
                </div>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / आवेदक का फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर या अंगूठा (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${conf.docLabel} *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
        `;
    } 
    // -------------------------------------------------------------
    // FORM 3: OTHER SERVICES (Voter ID, Scholarship, Ayushman, Jobs, etc.)
    // -------------------------------------------------------------
    else {
        formHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Name / आवेदक का नाम *</label>
                    <input type="text" id="applicantName" placeholder="Full Name (पूरा नाम)" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Father's / Guardian's Name *</label>
                    <input type="text" id="fatherName" placeholder="Father's Name" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
                    <input type="tel" id="mobileNumber" pattern="[0-9]{10}" placeholder="10 Digit Mobile No" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Full Address / पूरा पता *</label>
                    <input type="text" id="fullAddress" placeholder="Village, Block, District, PIN" class="w-full text-xs p-2.5 border border-slate-300 rounded-lg" required>
                </div>
            </div>
        `;

        docContainer.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Photo / पासपोर्ट फोटो (JPG) *</label>
                <input type="file" id="docPhoto" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Applicant Signature / हस्ताक्षर (JPG) *</label>
                <input type="file" id="docSign" accept=".jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Identification Proof / पहचान पत्र (PDF / JPG) *</label>
                <input type="file" id="docAadhaar" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${conf.docLabel} *</label>
                <input type="file" id="docSupporting" accept=".pdf,.jpg,.jpeg,.png" class="w-full text-xs border border-slate-300 rounded-lg p-1.5" required>
            </div>
        `;
    }

    container.innerHTML = formHTML;
}

// 5. SEQUENTIAL STEP CONTROLLER & VALIDATIONS
function goToStep(stepNum, pushState = true) {
    if(typeof hideNotice === 'function') hideNotice();
    currentStep = stepNum;
    
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');

    document.getElementById('stepBadge1').className = "text-slate-400";
    document.getElementById('stepBadge2').className = "text-slate-400";
    document.getElementById('stepBadge3').className = "text-slate-400";

    if(stepNum === 1) {
        document.getElementById('step1').classList.remove('hidden');
        document.getElementById('stepBadge1').className = "text-primary font-bold border-b-2 border-primary pb-1";
    } else if(stepNum === 2) {
        document.getElementById('step2').classList.remove('hidden');
        document.getElementById('stepBadge2').className = "text-primary font-bold border-b-2 border-primary pb-1";
    } else if(stepNum === 3) {
        document.getElementById('step3').classList.remove('hidden');
        document.getElementById('stepBadge3').className = "text-primary font-bold border-b-2 border-primary pb-1";
        updateBillAndPaymentLinks();
    }

    if(pushState && typeof pushModalState === 'function') {
        pushModalState('applyModal');
    }
}

function validateStep1AndNext() {
    if(typeof hideNotice === 'function') hideNotice();
    const selectedKey = document.getElementById('serviceSelect').value;
    
    const name = document.getElementById('applicantName') ? document.getElementById('applicantName').value.trim() : "";
    const father = document.getElementById('fatherName') ? document.getElementById('fatherName').value.trim() : "";
    const mobile = document.getElementById('mobileNumber') ? document.getElementById('mobileNumber').value.trim() : "";

    if (!name || !father || !mobile) {
        showNotice("Please fill in Applicant Name, Father's Name and Mobile Number!");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        showNotice("Please enter a valid 10-digit WhatsApp Mobile Number!");
        return;
    }

    // PAN Specific Validation
    if (selectedKey === 'pan') {
        const dob = document.getElementById('dobInput') ? document.getElementById('dobInput').value : "";
        if (!dob) {
            showNotice("Please enter Date of Birth (DOB) for PAN Card!");
            return;
        }
    }

    // RTPS Specific Validations
    if (['residence', 'caste', 'income'].includes(selectedKey)) {
        const gender = document.getElementById('applicantGender') ? document.getElementById('applicantGender').value.trim() : "";
        const mother = document.getElementById('motherName') ? document.getElementById('motherName').value.trim() : "";
        const district = document.getElementById('district') ? document.getElementById('district').value.trim() : "";
        const subDiv = document.getElementById('subDivision') ? document.getElementById('subDivision').value.trim() : "";
        const block = document.getElementById('block') ? document.getElementById('block').value.trim() : "";
        const panchayat = document.getElementById('panchayat') ? document.getElementById('panchayat').value.trim() : "";
        const village = document.getElementById('village') ? document.getElementById('village').value.trim() : "";
        const postoffice = document.getElementById('postoffice') ? document.getElementById('postoffice').value.trim() : "";
        const wardno = document.getElementById('wardno') ? document.getElementById('wardno').value.trim() : "";

        if (!gender || !mother || !district || !subDiv || !block || !panchayat || !village || !postoffice || !wardno) {
            showNotice("Please fill in all RTPS Address & Family details (Mother Name, Sub-Division, Block, Panchayat, Ward No)!");
            return;
        }
    }

    goToStep(2);
}

function validateStep2AndNext() {
    if(typeof hideNotice === 'function') hideNotice();
    const photo = document.getElementById('docPhoto') && document.getElementById('docPhoto').files.length;
    const sign = document.getElementById('docSign') && document.getElementById('docSign').files.length;
    const aadhaar = document.getElementById('docAadhaar') && document.getElementById('docAadhaar').files.length;
    const supporting = document.getElementById('docSupporting') && document.getElementById('docSupporting').files.length;

    if (!photo || !sign || !aadhaar || !supporting) {
        showNotice("Please upload all 4 required documents (Photo, Signature, Identification Card, Supporting Document)!");
        return;
    }

    goToStep(3);
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

// 9. FORM SUBMISSION HANDLER
async function handleFormSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    if(typeof hideNotice === 'function') hideNotice();

    // Verify Captcha
    const userCaptcha = document.getElementById('captchaInput').value.trim().toUpperCase();
    if (userCaptcha !== currentGeneratedCaptcha) {
        showNotice("Security Captcha Code is incorrect! Please enter correct code.");
        generateCaptcha();
        return;
    }

    // Verify Payment Check & UTR
    const utr = document.getElementById('paymentUTR').value.trim();
    const isPaidChecked = document.getElementById('paymentConfirmCheck').checked;
    const isTermsChecked = document.getElementById('termsCheck').checked;

    if (!isPaidChecked || !utr || utr.length < 8) {
        showNotice("Payment verification required! Please pay via UPI and enter valid 12-digit UTR No.");
        return;
    }

    if (!isTermsChecked) {
        showNotice("Please accept the Terms & Conditions and Privacy Policy!");
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
        const key = document.getElementById('serviceSelect').value;
        const conf = servicePricing[key] || servicePricing['residence'];
        const name = document.getElementById('applicantName') ? document.getElementById('applicantName').value : "";
        const father = document.getElementById('fatherName') ? document.getElementById('fatherName').value : "";
        const mobile = document.getElementById('mobileNumber') ? document.getElementById('mobileNumber').value : "";
        const randomToken = "GDW-2026-" + Math.floor(1000 + Math.random() * 9000);
        const currentDate = new Date().toLocaleDateString('en-GB');

        // Extract Optional Context
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

        // Construct Telegram Message based on Form Type
        let telegramText = `<b>🚨 NEW ONLINE APPLICATION 🚨</b>\n\n` +
            `<b>🎫 Token ID:</b> ${randomToken}\n` +
            `<b>📅 Date:</b> ${currentDate}\n` +
            `<b>📌 Service:</b> ${conf.title}\n\n` +
            `<b>👤 Basic Applicant Details:</b>\n` +
            `• <b>Name:</b> ${name}\n` +
            `• <b>Father Name:</b> ${father}\n` +
            `• <b>Mobile (WhatsApp):</b> ${mobile}\n`;

        if (key === 'pan') {
            telegramText += `• <b>Date of Birth:</b> ${dob}\n`;
        } else if (['residence', 'caste', 'income'].includes(key)) {
            telegramText += `• <b>Gender:</b> ${gender}\n` +
                `• <b>Mother Name:</b> ${mother}\n\n` +
                `<b>📍 RTPS Address Details:</b>\n` +
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

        // Send Text & Files to Telegram
        await sendTelegramMessage(telegramText);
        if (photoFile) await sendTelegramFile(photoFile, `📷 Photo - ${name} (${randomToken})`);
        if (signFile) await sendTelegramFile(signFile, `✍️ Signature - ${name} (${randomToken})`);
        if (aadhaarFile) await sendTelegramFile(aadhaarFile, `🆔 ID Card - ${name} (${randomToken})`);
        if (supportingFile) await sendTelegramFile(supportingFile, `📄 Supporting Doc - ${name} (${randomToken})`);

        // Populate Receipt
        document.getElementById('recToken').innerText = randomToken;
        document.getElementById('recDate').innerText = currentDate;
        document.getElementById('recService').innerText = conf.title;
        document.getElementById('recName').innerText = name;
        document.getElementById('recMobile').innerText = mobile;
        document.getElementById('recPaid').innerText = `₹${conf.total}`;
        document.getElementById('recUTR').innerText = utr;

        const waText = encodeURIComponent(`Hello Ganesh Digital World,\nNew Application Form Submitted:\n- Token: ${randomToken}\n- Name: ${name}\n- Service: ${conf.title}\n- Mobile: ${mobile}\n- Total Fee: ₹${conf.total}\n- Payment UTR: ${utr}`);
        document.getElementById('whatsappSendBtn').href = `https://wa.me/918252880028?text=${waText}`;

        // Switch to Receipt
        document.getElementById('loadingOverlay').classList.add('hidden');
        closeApplyModal(false);
        document.getElementById('receiptModal').classList.remove('hidden');

    } catch (error) {
        console.error("Submission Error: ", error);
        showNotice("Upload failed due to network issue. Please try submitting again.");
        document.getElementById('loadingOverlay').classList.add('hidden');
    } finally {
        isSubmitting = false;
        if(submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}
