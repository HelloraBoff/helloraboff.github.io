# 🎨 SPECS COMPLETAS PARA FIGMA DESIGN

## 🎯 **PROCESSO RECOMENDADO:**

### **PASSO 1: Abrir o arquivo HTML**
1. **Baixe o arquivo** `export-figma.html` 
2. **Abra no navegador** (Chrome recomendado)
3. **Use extensão** "Full Page Screen Capture" ou similar
4. **Faça screenshots** de cada seção em alta resolução

### **PASSO 2: Criar Design System no Figma**
1. **Crie um novo arquivo** no Figma Design  
2. **Configure as cores** da paleta abaixo
3. **Configure a tipografia** com as specs
4. **Crie componentes** glassmorphism

---

## 🎨 **PALETA DE CORES**

### **Cores Principais**
```
Violeta Primary:   #8B5CF6
Violeta Secondary: #A855F7  
Violeta Light:     #C084FC
Verde Success:     #10B981
Teal Accent:       #14B8A6
```

### **Cores de Interface**
```
Background Light:  #FFFFFF
Foreground Light:  #0F172A
Background Dark:   #0F0B1F
Foreground Dark:   #F3F0FF

Gray Scale:
- Gray 900: #0F172A
- Gray 800: #1E293B  
- Gray 700: #334155
- Gray 600: #475569
- Gray 500: #64748B
- Gray 400: #94A3B8
- Gray 300: #CBD5E1
- Gray 200: #E2E8F0
- Gray 100: #F1F5F9
- Gray 50:  #F8FAFC
```

### **Glassmorphism**
```
Glass Light:
- Background: rgba(255, 255, 255, 0.85)
- Border: rgba(139, 92, 246, 0.15)  
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.12)
- Blur: 20px backdrop-filter

Glass Strong:
- Background: rgba(255, 255, 255, 0.92)
- Border: rgba(139, 92, 246, 0.2)
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.12)  
- Blur: 25px backdrop-filter

Glass Subtle:
- Background: rgba(255, 255, 255, 0.7)
- Border: rgba(139, 92, 246, 0.12)
- Shadow: 0 4px 24px rgba(0, 0, 0, 0.06)
- Blur: 15px backdrop-filter
```

---

## 📝 **TIPOGRAFIA**

### **Font Family**
```
Primary: Inter (Google Fonts)
Weights: 300, 400, 500, 600, 700, 800
```

### **Type Scale**
```
H1 (Hero):        60px / Extrabold (800) / Line-height: 1.05 / Letter-spacing: -0.025em
H2 (Section):     48px / Bold (700) / Line-height: 1.1 / Letter-spacing: -0.02em  
H3 (Subsection):  30px / Bold (700) / Line-height: 1.2 / Letter-spacing: -0.015em
H4 (Component):   24px / Semibold (600) / Line-height: 1.3 / Letter-spacing: -0.01em
H5 (Card):        20px / Semibold (600) / Line-height: 1.35
H6 (Small):       18px / Medium (500) / Line-height: 1.4

Body (Paragraph): 16px / Normal (400) / Line-height: 1.7
Lead (Destaque):  20px / Normal (400) / Line-height: 1.6
Caption:          14px / Normal (400) / Line-height: 1.5
Small:            12px / Normal (400) / Line-height: 1.3

Button:           16px / Semibold (600) / Line-height: 1.4
Badge:            14px / Semibold (600) / Uppercase / Letter-spacing: 0.1em
Overline:         14px / Bold (700) / Uppercase / Letter-spacing: 0.15em
```

### **Text Colors**
```
Primary Text (Light): #0F172A
Secondary Text (Light): #334155  
Muted Text (Light): #64748B

Primary Text (Dark): #F3F0FF
Secondary Text (Dark): #C4B5FD
Muted Text (Dark): #A78BFA

Gradient Text: Linear gradient 135deg (#8B5CF6 → #A855F7 → #C084FC)
Accent Text: #8B5CF6
```

---

## 📐 **LAYOUT & SPACING**

### **Container**
```
Max-width: 1200px (7xl)
Padding: 24px (6) mobile / 48px (12) desktop
```

### **Grid System**
```
Columns: 12-column grid
Gap: 32px (8) desktop / 24px (6) mobile
```

### **Spacing Scale (Tailwind)**
```
4px  = 1
8px  = 2  
12px = 3
16px = 4
20px = 5
24px = 6
32px = 8
40px = 10
48px = 12
64px = 16
80px = 20
96px = 24
128px = 32
```

### **Border Radius**
```
Small:  8px
Medium: 12px  
Large:  16px
XL:     24px
2XL:    32px
3XL:    48px (para cards principais)
Full:   50% (círculos)
```

---

## 🎛️ **COMPONENTES**

### **Buttons**
```
Primary:
- Background: Linear gradient (#8B5CF6 → #D946EF)
- Text: White (#FFFFFF)
- Padding: 16px 32px
- Border-radius: 12px
- Font: 16px/Semibold
- Shadow: 0 4px 24px rgba(139, 92, 246, 0.3)

Secondary:
- Background: Transparent
- Border: 1px solid rgba(139, 92, 246, 0.4)  
- Text: #334155 (light) / #C4B5FD (dark)
- Padding: 16px 32px
- Border-radius: 12px
- Font: 16px/Semibold

Ghost:
- Background: Transparent
- Text: #8B5CF6
- Padding: 16px 24px  
- Font: 16px/Medium
```

### **Cards**
```
Standard Card:
- Background: Glass Strong effect
- Border: 1px solid rgba(139, 92, 246, 0.2)
- Border-radius: 24px
- Padding: 32px
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.12)

Project Card:
- Background: Glass Strong effect
- Border: 1px solid rgba(139, 92, 246, 0.2)
- Border-radius: 24px
- Hover: Border rgba(139, 92, 246, 0.4) + Scale 1.02
- Image area: 192px height
- Content padding: 24px
```

### **Badges**
```
Primary Badge:
- Background: Glass Subtle effect
- Border: 1px solid rgba(139, 92, 246, 0.3)
- Text: #8B5CF6
- Padding: 12px 24px
- Border-radius: Full (999px)
- Font: 14px/Semibold/Uppercase

Status Badge:
- Background: Glass Subtle effect  
- Border: 1px solid rgba(16, 185, 129, 0.3)
- Text: #10B981
- Padding: 8px 16px
- Border-radius: Full
- Font: 12px/Medium
- Icon: 8px green dot
```

### **Navigation**
```
Header:
- Background: Glass effect
- Height: 80px
- Logo: 20px/Bold + Gradient text
- Links: 16px/Medium + hover violet
- CTA: Primary button

Navigation Items:
- Font: 16px/Medium  
- Color: #334155 default / #8B5CF6 active
- Hover: #8B5CF6
- Active indicator: 2px underline gradient
```

---

## 🖼️ **SECTIONS LAYOUT**

### **Hero Section**
```
Layout: 2-column grid (60/40)
Height: 100vh minimum
Content: Left-aligned text + CTAs
Visual: Right-aligned profile card
Background: Gradient orbs + blur
Padding: 80px vertical
```

### **Stats Section**  
```
Layout: 4-column grid (responsive: 2x2 mobile)
Cards: Glass Strong + center-aligned
Icons: 32px Lucide icons
Numbers: 48px/Extrabold + Gradient
Labels: 16px/Semibold
Descriptions: 12px/Normal
```

### **Projects Section**
```
Layout: 3-column grid (responsive: 1 mobile)
Cards: Glass Strong + hover effects
Image: 192px height + gradient background
Content: 24px padding
Badge: Category label
Title: 20px/Bold
Company: 14px/Medium + violet
Description: 14px/Normal
Result: Glass Subtle + green accent
```

### **Contact Section**
```
Layout: Centered single column
Card: Glass Strong + max-width 768px
Padding: 48px all sides
Title: H2 centered
Description: Lead centered  
CTAs: Flex row + gap 16px
```

---

## 🎨 **EFFECTS & ANIMATIONS**

### **Glassmorphism Implementation**
1. **Background**: Use rgba colors from specs
2. **Backdrop Filter**: Add blur effect (simulated in Figma with background blur)
3. **Border**: Use specified rgba borders
4. **Shadow**: Apply box shadows from specs

### **Hover Effects**
```
Cards: Scale 1.02 + border color change
Buttons: Scale 1.05 + shadow increase  
Links: Color transition to violet
Images: Slight scale 1.05
```

### **Gradients**
```
Primary Gradient: Linear 135deg (#8B5CF6 → #D946EF)
Text Gradient: Linear 135deg (#8B5CF6 → #A855F7 → #C084FC)
Background Orbs: Radial gradients with 15% opacity
```

---

## 🎯 **RESPONSIVE BREAKPOINTS**

```
Mobile:   < 768px  (1 column layouts)
Tablet:   768-1024px (2 column layouts)  
Desktop:  > 1024px (3+ column layouts)
```

### **Mobile Adjustments**
- Hero: Stack columns vertically
- Stats: 2x2 grid instead of 1x4
- Projects: Single column
- Typography: Reduce H1 to 48px, H2 to 36px
- Padding: Reduce to 24px

---

## ✅ **CHECKLIST DE IMPLEMENTAÇÃO**

### **Setup Inicial**
- [ ] Configurar paleta de cores
- [ ] Importar fonte Inter (Google Fonts)
- [ ] Configurar type scale
- [ ] Criar componentes base

### **Componentes**
- [ ] Buttons (Primary, Secondary, Ghost)
- [ ] Cards (Standard, Project, Profile) 
- [ ] Badges (Primary, Status, Category)
- [ ] Navigation (Header, Links)
- [ ] Icons (Lucide icon library)

### **Sections**
- [ ] Hero (2-column + background)
- [ ] Stats (4-column grid)
- [ ] Projects (3-column grid)  
- [ ] Contact (centered)
- [ ] Footer (minimal)

### **Effects**
- [ ] Glassmorphism components
- [ ] Gradient overlays
- [ ] Hover states
- [ ] Responsive layouts

---

## 🚀 **DICAS FINAIS**

1. **Use Auto Layout** para todos os componentes
2. **Crie Variants** para light/dark mode  
3. **Organize em páginas**: Desktop, Mobile, Components
4. **Use Constraints** para responsividade
5. **Teste glassmorphism** com background images
6. **Documente** colors e typography nos Styles

**Este guia contém tudo que você precisa para recriar o design no Figma Design com precisão total! 🎨✨**