import { create } from "zustand";

export const usehostalstore = create((set) => ({
    accounts: [],
    comp: [],
    food:[],
    stud:[],
    ann:[],
    currentUser: null, // To store the currently signed-in user

    setAccount: (accounts) => set({ accounts }),
    setComp: (comp) => set({ comp }),
    setAnn: (ann) => set({ ann }),

    // Sign-up function
    createAccount: async (newAccount) => {
        if (!newAccount.name || !newAccount.email || !newAccount.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ accounts: [...state.accounts, data.data] }));
        }
        return { success: data.success, message: data.message };
    },

    // Sign-in function
    signInAccount: async (account) => {
        if (!account.email || !account.password) {
            return { success: false, message: "Please provide email and password." };
        }
        const res = await fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
        const data = await res.json();

        if (data.success) {
            set({ currentUser: data.data });
        }
        return { success: data.success, message: data.message };
    },

    createAccountadmin: async (newAccount) => {
        if (!newAccount.name || !newAccount.email || !newAccount.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/signupadmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ accounts: [...state.accounts, data.data] }));
        }
        return { success: data.success, message: data.message };
    },

    signInAccountadmin: async (account) => {
        if (!account.email || !account.password) {
            return { success: false, message: "Please provide email and password." };
        }
        const res = await fetch("/api/signinadmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
        const data = await res.json();

        if (data.success) {
            set({ currentUser: data.data });
        }
        return { success: data.success, message: data.message };
    },

    createFood: async (Food) => {
        if (!Food.foodname || !Food.time || !Food.img ) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/create_food", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Food),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ food: [...state.food, data.data] }));
        }
        return { success: data.success, message: data.message };
    },
    // createComplain: async (Complaint) => {
    //     if (!Complaint.name || !Complaint.email || !Complaint.roomno || !Complaint.comp) {
    //         return { success: false, message: "Please fill in all fields." };
    //     }
    //     const res = await fetch("/api/complaint", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(Complaint),
    //     });
    //     const data = await res.json();
    //     if (data.success) {
    //         set((state) => ({ comp: [...state.comp, data.data] }));
    //     }
    //     return { success: data.success, message: data.message };
    // },
  
    createComplain: async (Complaint) => {
        if (!Complaint.name || !Complaint.email || !Complaint.roomno || !Complaint.comp) {
            return { success: false, message: "Please fill in all fields." };
        }
    
        try {
            const res = await fetch("/api/complaint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Complaint),
            });
            const data = await res.json();
    
            if (data.success) {
                set((state) => ({ comp: [...state.comp, Complaint] })); // Update state
            }
            return { success: data.success, message: data.message };
        } catch (error) {
            console.error("Error in createComplain:", error);
            return { success: false, message: "Failed to submit complaint" };
        }
    },
    
    fetchComplaints: async () => {
        const res = await fetch("/api/getcomplaints", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ comp: data.data }); // Store complaints in comp state
        }
    },
    fetchfood: async () => {
        const res = await fetch("/api/getfood", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ food: data.data }); 
        }
    },
    createreview: async (Complaint) => {
        if (!Complaint.name || !Complaint.food || !Complaint.roomno || !Complaint.comp) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/complaint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Complaint),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ comp: [...state.comp, data.data] }));
        }
        return { success: data.success, message: data.message };
    },
    fetchstud: async () => {
        const res = await fetch("/api/hostalstud", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ stud: data.data }); 
        }
    },
    createAnnounce: async (announce) => {
        if (!announce.text) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/announce", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(announce),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ ann: [...state.ann, data.data] }));
        }
        return { success: data.success, message: data.message };
    },
    fetchAnnounce: async () => {
        const res = await fetch("/api/getannounce", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ ann: data.data }); 
        }
    },
}));
