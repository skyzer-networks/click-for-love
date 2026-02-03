# React JSX Cheat Sheet

This cheat sheet covers the **most common differences between normal HTML and React JSX**. Keep this in your template to reference while coding.

---

## 1️⃣ Common Attribute Differences

| HTML | JSX | Notes |
|------|-----|------|
| `class` | `className` | `class` is reserved in JS, so JSX uses `className` |
| `for` | `htmlFor` | Use on `<label>` tags instead of `for` |
| `tabindex` | `tabIndex` | JSX attributes are camelCase |
| `readonly` | `readOnly` | CamelCase for boolean attributes |
| `maxlength` | `maxLength` | CamelCase for HTML properties |
| `autocomplete` | `autoComplete` | CamelCase for HTML properties |
| `colspan` | `colSpan` | CamelCase for table attributes |
| `rowspan` | `rowSpan` | CamelCase for table attributes |

---

## 2️⃣ Event Handlers

| HTML | JSX | Notes |
|------|-----|------|
| `onclick` | `onClick` | Event handlers are camelCase |
| `onchange` | `onChange` | Same pattern for all events |
| `onmouseover` | `onMouseOver` | Example for mouse events |
| `onsubmit` | `onSubmit` | Forms use onSubmit in JSX |

**Example:**
```jsx
<button onClick={() => alert('Clicked!')}>Click me</button>
````

---

## 3️⃣ Self-Closing Tags

* In JSX, **all self-closing tags must have a `/` at the end**
* Examples:

```html
<!-- HTML -->
<img src="logo.png">
<input type="text">
<br>

<!-- JSX -->
<img src={logo} alt="Logo" />
<input type="text" />
<br />
```

---

## 4️⃣ Inline Styles

* JSX uses **JavaScript objects** for inline styles

```html
<!-- HTML -->
<div style="color: red; font-size: 20px;">Hello</div>

<!-- JSX -->
<div style={{ color: 'red', fontSize: '20px' }}>Hello</div>
```

* **Note:** Property names use camelCase (`fontSize`) instead of kebab-case (`font-size`)

---

## 5️⃣ JavaScript Expressions in JSX

* Use `{}` to insert JS variables, functions, or expressions

```jsx
const name = "Michael";

<h1>Hello, {name}!</h1>
<h2>{5 + 10}</h2>
```

* Conditional rendering:

```jsx
{isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>}
```

* Looping through arrays:

```jsx
const items = ['React', 'JSX', 'Components'];

<ul>
  {items.map(item => (
    <li key={item}>{item}</li>
  ))}
</ul>
```

---

## 6️⃣ Images / Assets

* In React, **import images from your assets folder** or reference `public` files

```jsx
// Import from src/assets
import logo from '../assets/images/logo.png';
<img src={logo} alt="Logo" />

// Reference from public folder
<img src="/favicon.png" alt="Favicon" />
```

* `src` must always reference a **variable or string** in JSX

---

## 7️⃣ Forms

* React forms are usually **controlled components**:

```jsx
const [name, setName] = React.useState('');

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

* Use `onSubmit` instead of `onsubmit`

---

## 8️⃣ Miscellaneous Differences

| HTML                      | JSX                         | Notes                               |
| ------------------------- | --------------------------- | ----------------------------------- |
| `checked`                 | `{checked}`                 | Use curly braces for boolean values |
| `selected`                | `{selected}`                | Same for `<option>` tags            |
| `dangerouslySetInnerHTML` | `{ __html: '<p>HTML</p>' }` | Only for raw HTML injection         |

---

## 9️⃣ Summary Tips

* Use **camelCase** for attributes and events
* Wrap **JavaScript expressions** in `{}`
* **Self-close all empty tags** (`<img />`, `<input />`)
* Import **assets** for images, fonts, or media
* Pages/components are **just JSX**; no extra HTML files are needed

---

> Keep this cheat sheet in your template for quick reference while building new pages and components!