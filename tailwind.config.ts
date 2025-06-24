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
				blue: {
					50: '#F0F7FF',
					100: '#E0EFFF',
					200: '#C0DFFF',
					300: '#90C6FF',
					400: '#5AA3FF',
					500: '#3385FF',
					600: '#0055D4',
					700: '#003D99',
					800: '#002C8F',
					900: '#001F66',
					950: '#00184D',
				},
				dark: {
					100: '#1A1A1A',
					200: '#141414',
					300: '#0F0F0F',
					400: '#0A0A0A',
					500: '#050505',
					900: '#000000',
				},
				light: {
					100: '#FFFFFF',
					200: '#F9F9F9',
					300: '#F5F5F5',
					400: '#F0F0F0',
					500: '#E9E9E9',
					600: '#E0E0E0',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif']
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			},
			maxWidth: {
				'container': '1320px',
				'container-lg': '1440px',
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
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.6s ease-out forwards',
				'scale': 'scale 0.4s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite'
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'glass-strong': '0 8px 32px rgba(0, 0, 0, 0.1)',
				'neo': '10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff',
				'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'hover': '0 10px 40px rgba(0, 0, 0, 0.1)'
			},
			backgroundImage: {
				'gradient-blue': 'linear-gradient(90deg, #002C8F 0%, #0055D4 100%)',
				'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #000000 100%)',
				'gradient-light': 'linear-gradient(90deg, #F9F9F9 0%, #FFFFFF 100%)',
				'gradient-blue-dark': 'linear-gradient(135deg, #001A4D 0%, #000000 100%)',
				'gradient-dark-blue': 'linear-gradient(135deg, #001640 0%, #000000 95%)',
				'gradient-translucent': 'linear-gradient(135deg, rgba(0, 22, 64, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
