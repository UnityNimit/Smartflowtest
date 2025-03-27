import { create } from "zustand";

export const useUsers = create((set) => ({
    users: [],
    
    // Set users directly
    setUsers: (users) => set({ users }),

    // Fetch users from the API
    fetchUsers: async () => {
        try {
            const res = await fetch('/api/users');
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            if (data.success) {
                set({ users: data.data });
            } else {
                console.error("Failed to fetch users:", data.message);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    },

    // Create a new user (Fixed variable name)
    createUser:  async (newUser) => {
        if (!newUser.name || !newUser.email || !newUser.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            if (data.success) {
                set((state) => ({ users: [...state.users, data.data] }));
                return { success: true, message: "User created successfully" };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error("Error creating user:", error);
            return { success: false, message: "An error occurred while creating the user." };
        }
    },

    // Delete a user
    deleteUser:  async (uid) => {
        try {
            const res = await fetch(`/api/users/${uid}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            if (!data.success) return { success: false, message: data.message };

            set((state) => ({ users: state.users.filter((user) => user._id !== uid) }));
            return { success: true, message: data.message };
        } catch (error) {
            console.error("Error deleting user:", error);
            return { success: false, message: "An error occurred while deleting the user." };
        }
    },

    // Update a user (Fixed variable name)
    updateUser:  async (uid, updatedUser) => {
        try {
            const res = await fetch(`/api/users/${uid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            if (!data.success) return { success: false, message: data.message };

            set((state) => ({
                users: state.users.map((user) => (user._id === uid ? data.data : user)),
            }));

            return { success: true, message: data.message };
        } catch (error) {
            console.error("Error updating user:", error);
            return { success: false, message: "An error occurred while updating the user." };
        }
    },
}));