// auth.ts
import { AuthOptions, getServerSession } from "next-auth";

const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connection();
                try {
                    const user = await User.findOne({ user: credentials.user });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),

        // Add more providers here
    ],
};

// Helper function to get the session on the server
const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
