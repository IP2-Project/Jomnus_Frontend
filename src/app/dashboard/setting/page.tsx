"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SettingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // State to handle selected specializations
    const [selectedSpecs, setSelectedSpecs] = useState(["Relocation", "Tech Setup", "Furniture"]);

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            localStorage.setItem("access_token", token);
            router.replace("/dashboard");
            return;
        }
    }, [router, searchParams]);

    const toggleSpec = (label) => {
        setSelectedSpecs(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : prev.length < 5 ? [...prev, label] : prev
        );
    };

    // The character avatar source identified from the application header
    const avatarSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"; 

    return (
        <main className="min-h-screen bg-white p-8 md:p-14">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Header */}
                <div className="flex justify-between items-end mb-12">
                    <h1 className="text-3xl font-extrabold text-[#111827] tracking-tight">Edit Profile</h1>
                </div>

                {/* 2. Avatar & Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="w-24 h-24 bg-[#2d2d2d] rounded-full border border-gray-100 overflow-hidden shadow-sm flex items-center justify-center">
                             <img src={avatarSrc} alt="Edit Profile Avatar" className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="space-y-7">
                            <InputField label="Full Display Name" value="Alex Rivera" />
                            <InputField label="Professional Headline" value="Elite Tasker | Specialized in Luxury Logistics & Tech" />
                            <div className="grid grid-cols-2 gap-6">
                                <InputField label="Primary Location" value="San Francisco, CA" isLocation />
                                <InputField label="Travel Radius (miles)" value="25" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f2f6ff] border-2 border-dashed border-blue-100 rounded-[32px] p-10 text-center flex flex-col items-center justify-center self-start h-[340px]">
                        <div className="bg-white p-4 rounded-full mb-4 shadow-sm text-blue-500">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-bold text-gray-800">Update Cover Photo</p>
                        <p className="text-[11px] text-gray-400 mt-1 mb-6">1600 × 400 px recommended</p>
                        <button className="bg-white px-8 py-2.5 rounded-2xl text-[11px] font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition">Upload Media</button>
                    </div>
                </div>

                {/* 3. Stats Management */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-[#111827]">Stats Management</h2>
                        <span className="text-[9px] text-[#22c55e] font-black flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span> LIVE SYNC ACTIVE
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard label="TOTAL TASKS" value="1,248" color="blue" />
                        <StatCard label="SUCCESS RATE" value="99.2%" color="orange" />
                        <StatCard label="RESPONSE TIME" value="14m" color="gray" />
                    </div>
                </div>

                {/* 4. Work History */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-[#111827]">Work History</h2>
                        <button className="bg-[#eff6ff] text-[#0058bc] px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-100 transition shadow-sm">+ Add New Case Study</button>
                    </div>
                    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-[40%] aspect-[4/3] bg-gray-100 rounded-[28px] overflow-hidden relative border border-gray-100 shadow-inner">
                             <img src="/api/placeholder/500/350" alt="Work Example" className="w-full h-full object-cover" />
                             <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-2 bg-white/95 rounded-lg text-xs shadow-sm">✏️</button>
                                <button className="p-2 bg-red-500 rounded-lg text-xs text-white shadow-sm">🗑️</button>
                             </div>
                        </div>
                        <div className="flex-1 py-3">
                            <h3 className="font-extrabold text-gray-900 text-2xl mb-4 tracking-tight">Luxury Penthouse Furniture Setup</h3>
                            <p className="text-gray-400 leading-relaxed text-sm mb-8">Full white-glove assembly for a 4-bedroom penthouse in the Marina District. Included mounting custom artwork and complex Italian shelving units.</p>
                            <div className="flex items-center gap-3">
                                <span className="bg-gray-100 text-gray-400 px-4 py-1 rounded text-[9px] font-black tracking-widest border border-gray-100 uppercase">RELOCATION LOGISTICS</span>
                                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">🚚</div>
                                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">🛋️</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Expertise & Endorsements */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-[#111827]">Expertise & Endorsements</h2>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-gray-500">Auto-approve endorsements</span>
                            <input type="checkbox" defaultChecked className="w-10 h-5 rounded-full border-gray-100 text-blue-600 focus:ring-blue-500" />
                       </div>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Tag label="Speed" endorsements="98" icon="⚡" iconColor="blue" />
                        <Tag label="Punctuality" endorsements="142" icon="⏱️" iconColor="orange" />
                        <Tag label="Tool Mastery" endorsements="78" icon="🔧" iconColor="green" />
                        <button className="flex items-center gap-2.5 bg-gray-100 text-gray-500 px-6 py-3 rounded-xl text-xs font-semibold border-2 border-dashed border-gray-200 hover:bg-gray-200 transition">
                            <span className="text-lg">+</span> Add Skill
                        </button>
                    </div>
                </div>

                {/* 6. Specializations */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-xl font-bold text-[#111827]">Specializations</h2>
                        <span className="text-xs text-gray-400">Pick up to 5 primary categories</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <SpecButton label="Relocation" icon="🚚" active={selectedSpecs.includes("Relocation")} onClick={() => toggleSpec("Relocation")} />
                        <SpecButton label="Tech Setup" icon="💻" active={selectedSpecs.includes("Tech Setup")} onClick={() => toggleSpec("Tech Setup")} />
                        <SpecButton label="Repair" icon="🔧" active={selectedSpecs.includes("Repair")} onClick={() => toggleSpec("Repair")} />
                        <SpecButton label="Deep Clean" icon="🧹" active={selectedSpecs.includes("Deep Clean")} onClick={() => toggleSpec("Deep Clean")} />
                        <SpecButton label="Furniture" icon="🛋️" active={selectedSpecs.includes("Furniture")} onClick={() => toggleSpec("Furniture")} />
                        <SpecButton label="Electric" icon="⚡" active={selectedSpecs.includes("Electric")} onClick={() => toggleSpec("Electric")} />
                        <SpecButton label="Plumbing" icon="🚰" active={selectedSpecs.includes("Plumbing")} onClick={() => toggleSpec("Plumbing")} />
                        
                        <button className="flex items-center justify-center p-5 rounded-2xl text-[13px] font-bold transition border-2 border-dashed border-gray-200 bg-[#f8fafc] text-[#64748b] hover:bg-gray-100 hover:border-gray-300">
                            Show All...
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

// --- Helper Components ---

function StatCard({ label, value, color }) {
    const accentStyles = {
        blue: "border-l-[#0058bc]",
        orange: "border-l-orange-400",
        gray: "border-l-gray-300"
    };

    return (
        <div className={`bg-white p-7 rounded-[32px] border border-gray-100 border-l-[6px] ${accentStyles[color]} shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md`}>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-2 uppercase">
                {label}
            </p>
            <p className="text-4xl font-black text-gray-900 tracking-tighter mb-4">
                {value}
            </p>
            <label className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded-md border-gray-200 text-blue-600 focus:ring-blue-500" />
                <span className="text-[10px] font-bold text-gray-500">Show on public profile</span>
            </label>
        </div>
    );
}

function InputField({ label, value, isLocation }) {
    return (
        <div className="relative">
            <label className="block text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-2.5">{label}</label>
            {isLocation && <span className="absolute left-4 top-11 text-gray-400 text-sm">📍</span>}
            <input
                type="text"
                defaultValue={value}
                className={`w-full p-4 ${isLocation ? 'pl-10' : ''} border border-gray-100 rounded-2xl bg-white text-[15px] text-gray-800 font-medium shadow-sm outline-none focus:ring-2 focus:ring-blue-100 transition`}
            />
        </div>
    );
}

function Tag({ label, endorsements, icon, iconColor }) {
    const iconBg = iconColor === 'blue' ? 'bg-[#dbeafe]' : iconColor === 'orange' ? 'bg-[#ffedd5]' : 'bg-[#dcfce7]';
    return (
        <div className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-2xl border border-gray-200 shadow-sm relative group min-w-[200px]">
            <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center text-lg`}>{icon}</div>
            <div>
                <p className="font-bold text-[#111827] text-[15px]">{label}</p>
                <p className="text-[12px] text-gray-300 font-semibold">{endorsements} Endorsements</p>
            </div>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

function SpecButton({ label, icon, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 p-5 rounded-2xl text-[13px] font-bold transition border shadow outline-none focus:ring-2 focus:ring-blue-200 ${
                active
                ? 'bg-[#0058bc] text-white border-[#0058bc]'
                : 'bg-white text-gray-600 border-gray-50 hover:bg-gray-50'
            }`}
        >
            <span className="text-lg">{icon}</span>
            {label}
        </button>
    );
}