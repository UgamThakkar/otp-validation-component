# 🔐 OTP Validation Component

A beautiful and interactive One-Time Password (OTP) validation component built with React. Features smooth animations, intuitive keyboard navigation, and a clean modern design.

![OTP Demo](https://img.shields.io/badge/React-18+-blue?logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Animations-green?logo=css3)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- **6-digit OTP input** with individual input boxes
- **Smooth drop-bounce animation** on page load
- **Auto-focus navigation** - automatically moves to next input after entering a digit
- **Backspace navigation** - moves to previous input on backspace
- **Number-only validation** - prevents non-numeric input
- **Responsive design** with hover and focus effects
- **Clean modern UI** with shadow effects and smooth transitions

## 🚀 Demo

The component features a stunning drop-bounce animation where the OTP input fields and heading:
1. Drop quickly from above to the center of the screen
2. Pause briefly in the center
3. Bounce back to their final position with elastic easing

## 🛠️ Technologies Used

- **React 18+** - Modern React with Hooks
- **CSS3** - Custom animations and styling
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/otp-validation-component.git
cd otp-validation-component
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎯 Usage

The component is ready to use out of the box. Simply import and use:

```jsx
import App from './App';

function MyApp() {
  return <App />;
}
```

### Key Features Explained:

#### 🎨 Animation System
- **Drop Animation**: Elements start above the viewport and drop down
- **Center Pause**: Brief pause in the center of the screen for dramatic effect
- **Bounce Back**: Elastic bounce to final position using cubic-bezier easing

#### ⌨️ Keyboard Navigation
- **Auto-advance**: Typing a digit automatically focuses the next input
- **Backspace navigation**: Pressing backspace on empty input focuses previous input
- **Single digit override**: Typing multiple digits only keeps the last one

#### 🔢 Input Validation
- Only accepts numeric input (0-9)
- Automatically trims whitespace
- Prevents invalid characters

## 🎨 Styling

### Color Scheme
- **Primary**: Black shadows for depth
- **Accent**: Blue focus highlights
- **Background**: Clean white background

### Animations
- **Duration**: 1.5 seconds for main animation
- **Easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` for bounce effect
- **Transitions**: Smooth hover and focus transitions

### Responsive Design
- Input boxes: 40x40px with 10px margins
- Font size: Extra large for readability
- Box shadows: 3D effect with focus enhancement

## 🔧 Customization

### Changing the Number of Digits
```jsx
const DIGITS_COUNT = 4; // Change from 6 to any number
```

### Modifying Animation
```css
@keyframes dropBounce {
  /* Adjust keyframe percentages and transforms */
  0% { transform: translateY(-100px); opacity: 0; }
  30% { transform: translateY(calc(50vh - 50%)); opacity: 1; }
  /* ... */
}
```

### Styling Input Boxes
```css
.otp-input {
  width: 50px;        /* Adjust size */
  height: 50px;
  border-radius: 10px; /* More rounded corners */
  background: #f5f5f5; /* Background color */
  /* ... */
}
```

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 👨‍💻 Author

Your Name - [@UgamThakkar](https://github.com/UgamThakkar)

Project Link: [https://github.com/yourusername/otp-validation-component](https://github.com/yourusername/otp-validation-component)

## 🙏 Acknowledgments

- React team for the amazing framework
- CSS-Tricks for animation inspiration
- The developer community for best practices

---

⭐ **Star this repo if you found it helpful!** ⭐