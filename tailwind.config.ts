
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				ue: {
					blue: '#00a8f3',
					dark: '#0d1117',
					gray: '#8b949e',
					light: '#58a6ff',
					accent: '#3ac4ff'
				},
				rog: {
					red: '#ff0029',
					dark: '#131315',
					darker: '#0a0a0c',
					gray: '#8c8c8c',
					light: '#f5f5f5',
					cyan: '#39ebff',
					purple: '#a355ff',
					glow: 'rgba(255, 0, 41, 0.6)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px var(--shadow-color, rgba(255, 0, 41, 0.4))' 
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 15px 4px var(--shadow-color, rgba(255, 0, 41, 0.6))' 
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)',
					},
					'50%': { 
						transform: 'translateY(-20px)',
					},
				},
				'particle-flow': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'50%': { transform: 'translateY(-20px) translateX(10px)' },
					'100%': { transform: 'translateY(-40px) translateX(0)', opacity: '0' }
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(255, 0, 41, 0.3), 0 0 10px rgba(255, 0, 41, 0.2), 0 0 15px rgba(255, 0, 41, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 10px rgba(255, 0, 41, 0.5), 0 0 20px rgba(255, 0, 41, 0.3), 0 0 30px rgba(255, 0, 41, 0.2)'
					}
				},
				'text-glow': {
					'0%, 100%': {
						textShadow: '0 0 5px rgba(255, 0, 41, 0.5), 0 0 15px rgba(255, 0, 41, 0.3)'
					},
					'50%': {
						textShadow: '0 0 10px rgba(255, 0, 41, 0.8), 0 0 25px rgba(255, 0, 41, 0.5)'
					}
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'10%': { opacity: '0.9' },
					'20%': { opacity: '1' },
					'30%': { opacity: '0.9' },
					'40%': { opacity: '1' },
					'50%': { opacity: '0.95' },
					'60%': { opacity: '1' },
					'70%': { opacity: '0.9' },
					'80%': { opacity: '1' },
					'90%': { opacity: '0.95' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'fade-in-down': 'fade-in-down 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'particle-flow': 'particle-flow 3s ease-out infinite',
				'glow-pulse': 'glow-pulse 2s infinite',
				'text-glow': 'text-glow 2s infinite',
				'flicker': 'flicker 3s infinite'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				rog: ['Montserrat', 'sans-serif'] // ROG typically uses a similar font to Montserrat
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
