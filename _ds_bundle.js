/* @ds-bundle: {"format":4,"namespace":"KindbodyDesignSystem_929fb0","components":[{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/content/Logo.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/content/Eyebrow.jsx":"a4208e917b82","components/content/Logo.jsx":"e562690fb913","components/content/Quote.jsx":"f9fa7588281e","components/content/SectionHeader.jsx":"a2c5869b9a92","components/content/StatBlock.jsx":"bf981fde034b","components/core/Badge.jsx":"229f8ca9183a","components/core/Button.jsx":"91f5043af2c8","components/core/Card.jsx":"d613c0cc05fb","components/core/Icon.jsx":"6ca6efdf4158","components/core/IconButton.jsx":"e52c947207c1","components/core/Tag.jsx":"fd544ca2e735","components/forms/Checkbox.jsx":"a85120ca453c","components/forms/Input.jsx":"ed22f2e667eb","components/forms/Radio.jsx":"be279272be0c","components/forms/Select.jsx":"865f49658e63","components/forms/Switch.jsx":"da56e1cec33b","components/navigation/Accordion.jsx":"5758cb28ad88","components/navigation/Tabs.jsx":"ef5d1559304f","components/overlay/Dialog.jsx":"94a44e6ce530","components/overlay/Tooltip.jsx":"a2a8e9e96428","slides/Slides.jsx":"3cc11f131eb5","ui_kits/website/Chrome.jsx":"0ed8ff4d9e7b","ui_kits/website/EmployerScreen.jsx":"16c3ad7a81a4","ui_kits/website/ExpertsScreen.jsx":"7cd12219b3c5","ui_kits/website/HomeScreen.jsx":"773adf52b777","ui_kits/website/LocationScreen.jsx":"508245a0aa1e","ui_kits/website/ServicesScreen.jsx":"af6b51007147"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KindbodyDesignSystem_929fb0 = window.KindbodyDesignSystem_929fb0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'navy',
  style,
  ...rest
}) {
  const colors = {
    navy: 'var(--kb-navy)',
    muted: 'var(--text-muted)',
    cream: 'var(--kb-cream)',
    yellow: 'var(--kb-yellow)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-eyebrow-size)',
      fontWeight: 700,
      letterSpacing: 'var(--type-eyebrow-tracking)',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Logo.jsx
try { (() => {
const SRC = {
  navy: 'assets/logos/kindbody-logo-navy.svg',
  white: 'assets/logos/kindbody-logo-white.svg',
  yellow: 'assets/logos/kindbody-logo-yellow.svg',
  mark: 'assets/logos/kindbody-logomark.svg'
};
function Logo({
  variant = 'navy',
  width = 180,
  boxed,
  basePath = '',
  href,
  style
}) {
  const isMark = variant === 'mark';
  const img = /*#__PURE__*/React.createElement("img", {
    src: basePath + SRC[variant],
    alt: "Kindbody",
    style: {
      display: 'block',
      width: isMark ? width : width,
      height: 'auto'
    }
  });
  // Per the guidelines: on busy backgrounds and photography, use the navy logo inside a yellow box.
  const content = boxed ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--kb-yellow)',
      padding: '0.5em 0.6em',
      display: 'inline-block'
    }
  }, img) : img;
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-block',
      lineHeight: 0,
      ...style
    }
  }, content) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      lineHeight: 0,
      ...style
    }
  }, content);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  attribution,
  variant = 'card',
  size = 'md',
  style
}) {
  const sizes = {
    sm: 17,
    md: 21,
    lg: 30
  };
  const grounds = {
    card: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      borderRadius: 'var(--radius-md)'
    },
    cream: {
      background: 'var(--kb-cream)',
      color: 'var(--text-primary)',
      padding: 32,
      borderRadius: 'var(--radius-md)'
    },
    navy: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      padding: 32,
      borderRadius: 'var(--radius-md)'
    },
    plain: {
      background: 'transparent',
      color: 'var(--text-primary)',
      padding: 0
    }
  };
  const g = grounds[variant];
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      ...g,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: sizes[size],
      lineHeight: 1.3,
      letterSpacing: '0.005em',
      textWrap: 'pretty'
    }
  }, '\u201C', children, '\u201D'), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 18,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: variant === 'navy' ? 'var(--kb-yellow)' : 'var(--text-muted)'
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'navy',
  size = 'lg',
  action,
  style
}) {
  const sizes = {
    sm: 'var(--type-display-5)',
    md: 'var(--type-display-4)',
    lg: 'var(--type-display-3)',
    xl: 'var(--type-display-2)'
  };
  const ink = tone === 'light' ? 'var(--kb-cream)' : 'var(--kb-navy)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '38ch'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'light' ? 'yellow' : 'navy',
    style: {
      marginBottom: 14
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sizes[size],
      lineHeight: 1.06,
      letterSpacing: '0.01em',
      color: ink,
      textWrap: 'pretty'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      lineHeight: 1.55,
      color: tone === 'light' ? 'rgba(239,233,226,.82)' : 'var(--text-secondary)',
      maxWidth: '58ch'
    }
  }, intro) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      paddingBottom: 4
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'navy',
  align = 'left',
  size = 'md',
  style
}) {
  const sizes = {
    sm: 'var(--type-display-4)',
    md: 'var(--type-display-2)',
    lg: 'var(--type-display-1)'
  };
  const ink = tone === 'light' ? 'var(--kb-cream)' : 'var(--kb-navy)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: sizes[size],
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: ink
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.4,
      maxWidth: '26ch',
      color: tone === 'light' ? 'rgba(239,233,226,.8)' : 'var(--text-secondary)',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'navy',
  style,
  ...rest
}) {
  const tones = {
    navy: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)'
    },
    yellow: {
      background: 'var(--kb-yellow)',
      color: 'var(--kb-navy)'
    },
    rose: {
      background: 'var(--kb-rose)',
      color: 'var(--kb-navy)'
    },
    cream: {
      background: 'var(--kb-cream)',
      color: 'var(--kb-navy)'
    },
    success: {
      background: 'var(--kb-success-soft)',
      color: 'var(--kb-success)'
    },
    warning: {
      background: 'var(--kb-warning-soft)',
      color: 'var(--kb-warning)'
    },
    error: {
      background: 'var(--kb-error-soft)',
      color: 'var(--kb-error)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'elevated',
  interactive,
  padding = 24,
  radius = 'var(--radius-md)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-card)',
      border: 'none'
    },
    hairline: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: 'none'
    },
    cream: {
      background: 'var(--kb-cream)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    navy: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      border: 'none',
      boxShadow: 'none'
    },
    yellow: {
      background: 'var(--kb-yellow)',
      color: 'var(--kb-navy)',
      border: 'none',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: radius,
      padding,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...variants[variant],
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-raised)',
        transform: 'translateY(-2px)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SUBSTITUTED ICON SET — Lucide (lucide-static 0.544.0) via CDN, stroke-width 1.5 by default.
// Kindbody supplied no icon library; see readme.md ICONOGRAPHY. Swap CDN_BASE to move to a real set.
const CDN_BASE = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth,
  label,
  style,
  ...rest
}) {
  const url = `url("${CDN_BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      opacity: strokeWidth && strokeWidth < 1.5 ? 0.85 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: 13,
    gap: 6
  },
  md: {
    padding: '13px 26px',
    fontSize: 15,
    gap: 8
  },
  lg: {
    padding: '17px 34px',
    fontSize: 16,
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--kb-yellow)',
    color: 'var(--kb-navy)',
    border: '2px solid var(--kb-yellow)'
  },
  navy: {
    background: 'var(--kb-navy)',
    color: 'var(--kb-cream)',
    border: '2px solid var(--kb-navy)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--kb-navy)',
    border: '2px solid var(--kb-navy)'
  },
  'outline-light': {
    background: 'transparent',
    color: 'var(--kb-cream)',
    border: '2px solid var(--kb-cream)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--kb-navy)',
    border: '2px solid transparent'
  }
};
const hovers = {
  primary: {
    background: 'var(--kb-yellow-deep)',
    borderColor: 'var(--kb-yellow-deep)'
  },
  navy: {
    background: 'var(--kb-navy-deep)',
    borderColor: 'var(--kb-navy-deep)'
  },
  outline: {
    background: 'var(--kb-navy)',
    color: 'var(--kb-cream)'
  },
  'outline-light': {
    background: 'var(--kb-cream)',
    color: 'var(--kb-navy)'
  },
  ghost: {
    background: 'var(--kb-cream)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  as,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'sm' ? 16 : 18
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 16 : 18
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const boxes = {
  sm: 34,
  md: 42,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = boxes[size] || boxes.md;
  const base = {
    primary: {
      background: 'var(--kb-yellow)',
      color: 'var(--kb-navy)',
      border: '2px solid var(--kb-yellow)'
    },
    navy: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      border: '2px solid var(--kb-navy)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--kb-navy)',
      border: '2px solid var(--kb-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--kb-navy)',
      border: '2px solid transparent'
    }
  }[variant];
  const hov = {
    primary: {
      background: 'var(--kb-yellow-deep)',
      borderColor: 'var(--kb-yellow-deep)'
    },
    navy: {
      background: 'var(--kb-navy-deep)',
      borderColor: 'var(--kb-navy-deep)'
    },
    outline: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)'
    },
    ghost: {
      background: 'var(--kb-cream)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...base,
      ...(hover && !disabled ? hov : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : size === 'lg' ? 24 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: clickable ? 'pointer' : 'default',
      border: selected ? '2px solid var(--kb-navy)' : '1px solid var(--border-default)',
      background: selected ? 'var(--kb-navy)' : hover && clickable ? 'var(--kb-cream)' : 'var(--kb-white)',
      color: selected ? 'var(--kb-cream)' : 'var(--kb-navy)',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const boxId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: boxId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      border: `2px solid ${checked ? 'var(--kb-navy)' : 'var(--border-default)'}`,
      background: checked ? 'var(--kb-navy)' : 'var(--kb-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--kb-yellow)"
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  required,
  disabled,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)',
      marginBottom: 8
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kb-error)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: disabled ? 'var(--kb-grey-100)' : 'var(--kb-white)',
      border: `2px solid ${error ? 'var(--kb-error)' : focus ? 'var(--kb-navy)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '0 14px',
      height: 50,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--kb-grey-600)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--kb-error)',
      marginTop: 6
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
  style,
  ...rest
}) {
  const radioId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: radioId,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: radioId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '50%',
      marginTop: 1,
      border: `2px solid ${checked ? 'var(--kb-navy)' : 'var(--border-default)'}`,
      background: 'var(--kb-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--kb-navy)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      lineHeight: 1.4,
      color: 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  required,
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kb-error)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 50,
      appearance: 'none',
      WebkitAppearance: 'none',
      padding: '0 42px 0 14px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)',
      background: disabled ? 'var(--kb-grey-100)' : 'var(--kb-white)',
      border: `2px solid ${error ? 'var(--kb-error)' : focus ? 'var(--kb-navy)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none'
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 15,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    color: "var(--kb-navy)"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--kb-error)',
      marginTop: 6
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const switchId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: switchId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      flex: '0 0 auto',
      background: checked ? 'var(--kb-navy)' : 'var(--kb-grey-200)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: checked ? 'var(--kb-yellow)' : 'var(--kb-white)',
      boxShadow: '0 1px 3px rgba(39,42,94,.25)',
      transition: 'left var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  allowMultiple,
  defaultOpen = [],
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = i => setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : allowMultiple ? [...prev, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map((it, i) => {
    const on = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 21,
        lineHeight: 1.25,
        color: 'var(--text-primary)'
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? 'minus' : 'plus',
      size: 22,
      color: "var(--kb-navy)"
    })), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 22px',
        fontSize: 16,
        lineHeight: 1.55,
        color: 'var(--text-secondary)',
        maxWidth: '64ch'
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style
}) {
  const [internal, setInternal] = React.useState(items[0] && (items[0].value ?? items[0]));
  const active = value !== undefined ? value : internal;
  const set = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  const norm = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'pill' ? 8 : 32,
      fontFamily: 'var(--font-sans)',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      flexWrap: 'wrap',
      ...style
    }
  }, norm.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => set(t.value),
      style: variant === 'pill' ? {
        fontSize: 14,
        fontWeight: 500,
        padding: '10px 18px',
        borderRadius: 'var(--radius-pill)',
        border: on ? '2px solid var(--kb-navy)' : '1px solid var(--border-default)',
        background: on ? 'var(--kb-navy)' : 'var(--kb-white)',
        color: on ? 'var(--kb-cream)' : 'var(--kb-navy)',
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)'
      } : {
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '0 0 14px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: on ? 'var(--kb-navy)' : 'var(--text-muted)',
        borderBottom: `3px solid ${on ? 'var(--kb-yellow)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--overlay-scrim)',
      padding: 24,
      fontFamily: 'var(--font-sans)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      width,
      maxWidth: '100%',
      maxHeight: '86vh',
      overflow: 'auto',
      padding: 32,
      boxSizing: 'border-box',
      animation: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 20
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-5)',
      lineHeight: 1.15,
      letterSpacing: '0.01em',
      color: 'var(--text-primary)'
    }
  }, title) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      lineHeight: 1.3,
      padding: '8px 11px',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-card)'
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
const {
  Logo,
  Eyebrow,
  Quote,
  StatBlock,
  Badge,
  Button,
  Icon
} = window.KindbodyDesignSystem_929fb0;
const W = 1280,
  H = 720;
function Frame({
  children,
  ground = 'cream',
  pad = 80,
  style
}) {
  const grounds = {
    cream: 'var(--kb-cream)',
    white: 'var(--kb-white)',
    navy: 'var(--kb-navy)',
    yellow: 'var(--kb-yellow)',
    rose: 'var(--kb-rose)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      background: grounds[ground],
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      padding: pad,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
function Runner({
  label,
  page,
  tone = 'navy'
}) {
  const ink = tone === 'light' ? 'rgba(239,233,226,.75)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 34,
      left: 80,
      right: 80,
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: ink
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, page));
}

/* 1 — Title */
function TitleSlide({
  title = 'World-Class Fertility and Family-Building Care',
  subtitle = 'Kindbody supports all paths to parenthood.',
  footnote = 'April 2024'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "navy",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 64,
      alignItems: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 0 80px 80px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "yellow",
    width: 210,
    basePath: "../"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '48px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.04,
      letterSpacing: '.01em',
      color: 'var(--kb-cream)',
      textWrap: 'pretty'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '-.01em',
      lineHeight: 1,
      color: 'var(--kb-yellow)'
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 58,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'rgba(239,233,226,.7)'
    }
  }, footnote)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: "url('../assets/imagery/people-2.png') center/cover"
    }
  }));
}

/* 2 — Section divider */
function SectionSlide({
  number = '01',
  title = 'Color Palette',
  intro = 'The Kindbody color palette embodies the spirit of the brand. It’s important to use the colors as directed across all creative assets.'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "yellow"
  }, /*#__PURE__*/React.createElement(Runner, {
    label: "Kindbody",
    page: number
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '22ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 72,
      lineHeight: 1.02,
      letterSpacing: '.01em',
      color: 'var(--kb-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--kb-navy)',
      maxWidth: '44ch'
    }
  }, intro)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      bottom: -180,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 620,
      lineHeight: .8,
      color: 'rgba(39,42,94,.12)'
    }
  }, ")"));
}

/* 3 — Content: headline + subhead + bullets */
function ContentSlide({
  eyebrow = 'Visit Kindbody New York City',
  title = 'Some of our services include:',
  bullets = ['IVF, IUI, & conception care', 'Egg & embryo freezing', 'Donor, surrogacy, & adoption', 'LGBTQ+ services', 'Male fertility care'],
  body = 'Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey. Kindbody partners with employers to provide fertility benefits and is in-network with major health plans.'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "cream"
  }, /*#__PURE__*/React.createElement(Runner, {
    label: "Kindbody",
    page: "Services"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.08,
      letterSpacing: '.01em',
      color: 'var(--kb-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, body)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 14
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      fontSize: 19,
      borderBottom: '1px solid var(--kb-cream-deep)',
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--kb-navy)"
  }), b)))));
}

/* 4 — Stats */
function StatSlide({
  eyebrow = 'About Kindbody',
  title = 'The benefits provider, the platform, and the provider of care',
  stats = [['121', 'leading employers'], ['3.1M', 'lives covered'], ['$315M', 'raised to date']]
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "navy"
  }, /*#__PURE__*/React.createElement(Runner, {
    label: "Kindbody",
    page: "Scale",
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "yellow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.08,
      letterSpacing: '.01em',
      color: 'var(--kb-cream)',
      maxWidth: '28ch'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      borderTop: '1px solid rgba(239,233,226,.25)',
      paddingTop: 44
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(StatBlock, {
    key: v,
    tone: "light",
    value: v,
    label: l
  })))));
}

/* 5 — Big quote */
function QuoteSlide({
  quote = 'Kindbody and the team made an experience that can be scary and overwhelming feel nothing but smooth.',
  attribution = '-Princeton Patient'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "rose"
  }, /*#__PURE__*/React.createElement(Runner, {
    label: "Kindstories",
    page: "Patient voice"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    variant: "plain",
    size: "lg",
    attribution: attribution,
    style: {
      fontSize: 34
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      height: 420,
      background: "url('../assets/imagery/people-4.png') center/cover"
    }
  })));
}

/* 6 — Full-bleed photo with yellow-box logo */
function PhotoSlide({
  title = 'Care that feels nothing like a clinic',
  kicker = 'Kindbody signature clinics'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "navy",
    pad: 0,
    style: {
      background: "url('../assets/imagery/clinic-2.png') center/cover"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--image-protection)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 48,
      left: 56
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "navy",
    boxed: true,
    width: 170,
    basePath: "../"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      right: 56,
      bottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cream"
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: '.01em',
      color: 'var(--kb-white)',
      maxWidth: '26ch'
    }
  }, title)));
}

/* 7 — Two-column comparison */
function ComparisonSlide({
  title = 'We Say This, Not That',
  left = {
    head: 'We say this',
    items: ['Family-building care', 'Gestational surrogate', 'Complementary', 'Kindman', 'healthcare', 'U.S.']
  },
  right = {
    head: 'Not that',
    items: ['Family building care', 'Surrogate', 'Free', 'KindMan', 'health care', 'US']
  }
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "white"
  }, /*#__PURE__*/React.createElement(Runner, {
    label: "Messaging",
    page: "Rules"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.08,
      letterSpacing: '.01em',
      color: 'var(--kb-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, [[left, 'var(--kb-yellow)'], [right, 'var(--kb-cream)']].map(([col, bg]) => /*#__PURE__*/React.createElement("div", {
    key: col.head,
    style: {
      background: bg,
      borderRadius: 'var(--radius-md)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--kb-navy)'
    }
  }, col.head), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '18px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 10,
      fontSize: 19,
      color: 'var(--kb-navy)'
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))))))));
}

/* 8 — Closing */
function ClosingSlide({
  title = 'Let’s connect',
  body = 'We’re currently offering virtual consultations with a board certified physician.',
  cta = 'kindbody.com/book'
}) {
  return /*#__PURE__*/React.createElement(Frame, {
    ground: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "navy",
    width: 230,
    basePath: "../"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '44px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: '.01em',
      color: 'var(--kb-navy)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '48ch'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right"
  }, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "1-855-KND-BODY \xB7 navigator@kindbody.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 26,
      background: 'var(--kb-yellow)'
    }
  }));
}
Object.assign(window, {
  Frame,
  Runner,
  TitleSlide,
  SectionSlide,
  ContentSlide,
  StatSlide,
  QuoteSlide,
  PhotoSlide,
  ComparisonSlide,
  ClosingSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon,
  Input
} = window.KindbodyDesignSystem_929fb0;
const NAV = [{
  label: 'About Us',
  items: ['About Us', 'Clinical Excellence', 'Our Experts', 'Leadership', 'Kindstories', 'Press', 'Careers', 'FAQ', 'Blog']
}, {
  label: 'Pricing',
  items: ['Services & Pricing', 'Insurance', 'Financing']
}, {
  label: 'Services',
  items: ['IVF & Conception Care', 'Egg Freezing & Embryo Banking', 'LGBTQ+', 'Fertility Consults', 'Male Fertility', 'Menopause', 'Kindlabs', 'Kindbody360: Holistic Care', 'Oncofertility']
}, {
  label: 'Locations',
  items: ['All Locations', 'Virtual', 'Austin, TX', 'Bethesda, MD', 'Charlotte, NC', 'Chicago, IL', 'Dallas, TX', 'Denver, CO', 'Houston, TX', 'Los Altos, CA', 'Milwaukee, WI', 'Minneapolis, MN', 'New York, NY', 'Newport Beach, CA', 'Princeton, NJ', 'Rogers, AR', 'San Francisco, CA', 'Santa Monica, CA', 'St. Louis, MO', 'Walnut Creek, CA', 'Washington, D.C.']
}, {
  label: 'Kindbody Benefit',
  items: ['For Members', 'For Employers', 'Health Plans']
}, {
  label: 'Resources',
  items: ['Medteach', 'Fertility Education', 'Resource Hub']
}];
function UtilityBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '9px 32px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Schedule"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Member Portal"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Provider Portal")));
}
function Header({
  onNavigate,
  active
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(UtilityBar, null), /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setOpen(null),
    style: {
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px',
      height: 78,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "navy",
    width: 158,
    basePath: "../../"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("span", {
    key: n.label,
    onMouseEnter: () => setOpen(n.label),
    style: {
      position: 'relative',
      padding: '28px 0',
      cursor: 'pointer',
      color: 'var(--kb-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      borderBottom: open === n.label ? '3px solid var(--kb-yellow)' : '3px solid transparent'
    }
  }, n.label, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate('services')
  }, "Schedule")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--kb-white)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '26px 32px 30px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '10px 32px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5
    }
  }, NAV.find(n => n.label === open).items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(null);
      onNavigate(routeFor(i));
    },
    style: {
      color: 'var(--kb-navy)',
      textDecoration: 'none',
      padding: '6px 0'
    }
  }, i)))) : null));
}
function routeFor(item) {
  if (item === 'Services & Pricing') return 'services';
  if (item === 'Our Experts' || item === 'Leadership') return 'experts';
  if (item === 'For Employers') return 'employer';
  if (item === 'New York, NY' || item === 'All Locations') return 'location';
  return 'home';
}
const FOOTER = [{
  head: 'Company',
  items: ['About Us', 'Our Doctors', 'Join Our Team', 'Employer Benefits', 'Blog', 'Contact Us']
}, {
  head: 'Services',
  items: ['Egg Freezing', 'IVF & Conception', 'Holistic Care', 'Oncofertility']
}, {
  head: 'Resources',
  items: ['Press', 'Patient Portal', 'FAQ', 'Access to Care', 'Financing', 'Fertility Education', 'Medteach', 'Referring Providers', 'Physician Licenses']
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--kb-navy)',
      color: 'var(--kb-cream)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '64px 32px 32px',
      display: 'grid',
      gridTemplateColumns: '1.3fr repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    width: 170,
    basePath: "../../"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500
    }
  }, "Stay in touch with Kindbody"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:1-855-563-2639",
    style: {
      color: 'var(--kb-yellow)',
      textDecoration: 'none'
    }
  }, "1-855-KND-BODY"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "mailto:navigator@kindbody.com",
    style: {
      color: 'var(--kb-yellow)',
      textDecoration: 'none'
    }
  }, "navigator@kindbody.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 14
    }
  }, ['facebook', 'instagram', 'twitter', 'linkedin'].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: s,
    size: 20,
    color: "var(--kb-cream)",
    label: s
  })))), FOOTER.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--kb-yellow)'
    }
  }, col.head), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gap: 10,
      fontSize: 12.5,
      letterSpacing: '.07em',
      textTransform: 'uppercase'
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'var(--kb-cream)',
      textDecoration: 'none'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(239,233,226,.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '20px 32px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 18,
      fontSize: 12,
      color: 'rgba(239,233,226,.75)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Kindbody"), ['Privacy Policy', 'Terms of Use', 'SMS Terms', 'HIPAA Privacy', 'Data Processing'].map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, i)))));
}
function Section({
  children,
  ground = 'cream',
  pad = 96,
  style
}) {
  const grounds = {
    cream: 'var(--kb-cream)',
    white: 'var(--kb-white)',
    navy: 'var(--kb-navy)',
    rose: 'var(--kb-rose)',
    yellow: 'var(--kb-yellow)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: grounds[ground],
      padding: `${pad}px 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, children));
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  UtilityBar,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EmployerScreen.jsx
try { (() => {
const {
  Button,
  Card,
  StatBlock,
  SectionHeader,
  Quote,
  Eyebrow,
  Icon,
  Accordion,
  Badge
} = window.KindbodyDesignSystem_929fb0;
const PILLARS = [{
  head: 'We provide the care',
  body: 'Kindbody is the only employee fertility benefit solution that provides care directly — through signature clinics, mobile clinics, and a global partner network.',
  icon: 'stethoscope'
}, {
  head: 'One integrated platform',
  body: 'Benefits management, scheduling, diagnostics, and clinical care run on Kindbody’s own technology, so nothing gets handed off and lost.',
  icon: 'layout-grid'
}, {
  head: 'Lower cost, better outcomes',
  body: 'A seamless, integrated experience with superior health outcomes at lower cost, making fertility care more affordable and accessible for all.',
  icon: 'trending-down'
}];
const COVERAGE = [{
  title: 'What does the benefit cover?',
  content: 'The full spectrum of reproductive care from preconception to postpartum through menopause — fertility consults, IVF and IUI, egg and embryo freezing, LGBTQ+ family building, gestational surrogacy support, male fertility care, and menopause care.'
}, {
  title: 'How do employees get started?',
  content: 'Members activate their benefit online, then schedule directly with a Kindbody physician. Their coverage is applied at the time of scheduling — no claims paperwork to chase.'
}, {
  title: 'What do employers get?',
  content: 'Direct access to Kindbody clinical leadership, utilization and outcomes reporting, and a benefit design built with your population in mind.'
}];
function EmployerScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    ground: "navy",
    pad: 88
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "yellow"
  }, "Employer benefits"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-2)',
      lineHeight: 1.05,
      letterSpacing: '.01em',
      color: 'var(--kb-cream)'
    }
  }, "Bringing Care Directly to Your Employees"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 32px',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'rgba(239,233,226,.85)',
      maxWidth: '46ch'
    }
  }, "Kindbody is a leading fertility clinic network and global family-building benefits provider for employers, offering the full-spectrum of reproductive care from preconception to postpartum through menopause."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Talk to our team"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    onClick: () => onNavigate('services')
  }, "See our services"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      minHeight: 380,
      background: "url('../../assets/imagery/people-4.png') center/cover"
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "yellow",
    pad: 64
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "121",
    label: "leading employers trust Kindbody as their fertility benefits provider"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3.1M",
    label: "lives covered"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "$315M",
    label: "raised from leading investors including Perceptive Advisors, Morgan Health, and GV"
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 88
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Why Kindbody",
    size: "lg",
    title: "The benefits provider, the platform, and the provider of care"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.head,
    variant: "cream",
    padding: 32
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 28,
    color: "var(--kb-navy)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2
    }
  }, p.head), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, p.body))))), /*#__PURE__*/React.createElement(Section, {
    ground: "cream",
    pad: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Coverage",
    size: "md",
    title: "A single door for fertility care"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Preconception"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "IVF & IUI"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Egg freezing"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "LGBTQ+"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Surrogacy"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Postpartum"), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "Menopause"))), /*#__PURE__*/React.createElement(Accordion, {
    items: COVERAGE,
    defaultOpen: [0]
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 80
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "lg",
    variant: "plain",
    attribution: "Fortune"
  }, "The hottest new employee benefit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "sm",
    variant: "cream",
    attribution: "CNBC"
  }, "Startups such as Kindbody ... are successfully demystifying the conversation, removing the stigma and increasing accessibility."), /*#__PURE__*/React.createElement(Quote, {
    size: "sm",
    variant: "cream",
    attribution: "Inc."
  }, "The company's bigger goal is to rethink everything about the experience of going to a fertility clinic \u2014 from the look and feel of it to the lack of transparency around costs."))));
}
Object.assign(window, {
  EmployerScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EmployerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ExpertsScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Tag,
  SectionHeader,
  Icon,
  Dialog
} = window.KindbodyDesignSystem_929fb0;
const DOCTORS = [{
  name: 'Dr. Lynn Westphal',
  title: 'Lead CMO, Medicine + Research & REI',
  loc: 'Los Altos, CA',
  bio: 'Lynn Marie Westphal, M.D., FACOG, graduated summa cum laude from Lawrence University, earned her M.D. degree at Stanford University, and did her residency training in obstetrics and gynecology at UCLA and Stanford University. She is double board-certified in Obstetrics and Gynecology / Reproductive Endocrinology and Infertility.'
}, {
  name: 'Dr. Amber Cooper',
  title: 'CMO, Genomics + Lab Operations & REI',
  loc: 'St. Louis, MO',
  bio: 'Dr. Amber R. Cooper, MD, MS is Chief Medical Officer-Genomics and Laboratory Sciences, and Medical and IVF Practice Director, St. Louis. She is a globally recognized expert on the topic of artificial intelligence and automation to increase access to fertility treatments.'
}, {
  name: 'Dr. Fahimeh Sasan',
  title: 'Founding Physician & Chief Innovation Officer',
  loc: 'New York, NY',
  bio: 'Dr. Sasan is a board certified and practicing Ob/Gyn who completed her residency at Mount Sinai Hospital in New York City and is an Assistant Professor of Obstetrics, Gynecology, and Reproductive Medicine at Mount Sinai Hospital.'
}, {
  name: 'Dr. Juan Alvarez',
  title: 'Reproductive Endocrinologist',
  loc: 'Chicago, IL',
  bio: 'Dr. Juan Alvarez is a double board certified Reproductive Endocrinologist and Infertility Specialist. As both a member of the LGBTQ+ community and a fertility specialist, he has a special interest in LGBTQ+ fertility care and education.'
}, {
  name: 'Dr. Kristen Cain',
  title: 'Reproductive Endocrinologist',
  loc: 'Minneapolis, MN',
  bio: 'Dr. Kristen Cain is a board-certified Ob/Gyn and Reproductive Endocrinologist who has worked in infertility since completing her fellowship at UCLA in 1995.'
}, {
  name: 'Dr. Rachael Cohen',
  title: 'Reproductive Endocrinologist',
  loc: 'Princeton, NJ',
  bio: 'Rachael Cohen, DO is a double board-certified reproductive endocrinologist and infertility specialist. Her personal experience with IVF to build her family has heavily influenced her approach to patient care.'
}, {
  name: 'Dr. Geraldine Ekpo',
  title: 'Reproductive Endocrinologist',
  loc: 'San Francisco, CA',
  bio: 'Dr. Geraldine Ekpo is a Reproductive Endocrinology and Infertility Specialist with years of experience providing compassionate fertility care in the San Francisco Bay Area.'
}, {
  name: 'Dr. Anupama Kathiresan',
  title: 'Reproductive Endocrinologist',
  loc: 'Houston, TX',
  bio: 'Dr. Kathiresan is board certified in both Reproductive Endocrinology and Infertility and Obstetrics & Gynecology, and is passionate about promoting fertility education awareness.'
}];
const REGIONS = ['All', 'New York, NY', 'Chicago, IL', 'San Francisco, CA', 'St. Louis, MO', 'Houston, TX'];
function ExpertsScreen() {
  const [region, setRegion] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const list = region === 'All' ? DOCTORS : DOCTORS.filter(d => d.loc === region);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    ground: "cream",
    pad: 64
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Our experts",
    size: "xl",
    title: "Meet our physicians",
    intro: "Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, REGIONS.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: r === region,
    onClick: () => setRegion(r)
  }, r)))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, list.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: d.name,
    variant: "elevated",
    padding: 0,
    interactive: true,
    onClick: () => setOpen(d),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      background: `url('../../assets/imagery/${['people-1', 'people-2', 'people-3', 'people-4'][i % 4]}.png') center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.2,
      color: 'var(--kb-navy)'
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13.5,
      lineHeight: 1.4,
      color: 'var(--text-secondary)'
    }
  }, d.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase'
    }
  }, "View more", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Physician headshots are placeholders drawn from the brand book\u2019s clinic photography \u2014 real headshots are shot in-clinic in neutral clothing.")), /*#__PURE__*/React.createElement(Dialog, {
    open: Boolean(open),
    onClose: () => setOpen(null),
    title: open ? open.name : '',
    width: 620,
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconRight: "arrow-right"
    }, "Schedule with ", open ? open.name.split(' ').slice(-1)[0] : '')
  }, open ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, open.title, " \xB7 ", open.loc), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0'
    }
  }, open.bio)) : null));
}
Object.assign(window, {
  ExpertsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ExpertsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Quote,
  SectionHeader,
  Eyebrow,
  Icon,
  Input,
  StatBlock
} = window.KindbodyDesignSystem_929fb0;
const SERVICES = [{
  head: 'Our services',
  body: 'Fertility and family-building care in modern, tech-enabled clinics.',
  cta: 'Services & Pricing',
  route: 'services'
}, {
  head: 'Making care accessible',
  body: 'Through employee benefits, financing, and insurance options.',
  cta: 'Insurance & financing',
  route: 'services'
}, {
  head: 'Employee benefits',
  body: 'Kindbody is the only employee fertility benefit solution that provides care directly.',
  cta: 'For Employers',
  route: 'employer'
}];
const TESTIMONIALS = [{
  q: 'Kindbody has provided me with an experience that made me feel valued. Starting IVF was an unknown & confusing journey. They were available for every question and concern. I was treated as an individual by all the providers and I am grateful.',
  a: '-New York Patient'
}, {
  q: 'Our doctor and her team were outstanding. Her knowledge and understanding of me as a patient gave us hope and confidence throughout the process, ultimately leading us to success.',
  a: '-St. Louis Patient'
}, {
  q: 'Kindbody and the team made an experience that can be scary and overwhelming feel nothing but smooth. I’m so thankful for their transparent communication, welcoming environment, and knowledge.',
  a: '-Princeton Patient'
}];
const PRESS = [{
  outlet: 'CNN',
  quote: 'Making it easier and less intimidating to start the conversation on fertility.'
}, {
  outlet: 'Well+Good',
  quote: 'Kindbody aims to be as approachable as possible. The doctors don’t wear lab coats and the offices look more like a chic hangout than a clinic.'
}, {
  outlet: 'Fortune',
  quote: 'The hottest new employee benefit'
}, {
  outlet: 'CNBC',
  quote: 'Startups such as Kindbody ... are successfully demystifying the conversation, removing the stigma and increasing accessibility.'
}];
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--kb-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-1)',
      lineHeight: 1.04,
      letterSpacing: '.01em',
      color: 'var(--kb-navy)',
      textWrap: 'pretty'
    }
  }, "Leading the Future of Fertility Care"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 34px',
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "Whether you\u2019re exploring your fertility, freezing your eggs, or ready to get pregnant, Kindbody is here with innovative technology and world-class clinical expertise to guide you every step of the way. Your future starts here."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate('services')
  }, "Get started")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      margin: '40px 0',
      borderRadius: 'var(--radius-xl)',
      background: "url('../../assets/imagery/people-1.png') center/cover",
      minHeight: 460
    }
  })));
}
function HomeScreen({
  onNavigate,
  onOpenSignup
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    ground: "white"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "A new generation of fertility care has arrived",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.head,
    variant: "cream",
    interactive: true,
    padding: 32,
    onClick: () => onNavigate(s.route)
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 700
    }
  }, s.head), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 22px',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, s.body), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--kb-navy)'
    }
  }, s.cta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))))), /*#__PURE__*/React.createElement(Section, {
    ground: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "light",
    eyebrow: "Patient stories",
    size: "md",
    title: "The Kindbody patient experience",
    intro: "Kindbody can support you in every step of your family-building journey. Meet a few of the wonderful patients who made us a part of theirs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: "play",
    onClick: onOpenSignup
  }, "Watch video"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      minHeight: 340,
      background: "url('../../assets/imagery/people-3.png') center/cover"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--image-protection)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32,
      borderTop: '1px solid rgba(239,233,226,.2)',
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "light",
    size: "sm",
    value: "121",
    label: "leading employers trust Kindbody as their fertility benefits provider"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "light",
    size: "sm",
    value: "3.1M",
    label: "lives covered"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "light",
    size: "sm",
    value: "$315M",
    label: "raised from leading investors"
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "yellow",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-4)',
      lineHeight: 1.1,
      color: 'var(--kb-navy)'
    }
  }, "Start with the Basics: Sign Up to Watch \u201CFertility 101\u201D")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onOpenSignup();
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr auto',
      gap: 12,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "ZIP Code",
    hint: "5-digit"
  }), /*#__PURE__*/React.createElement(Button, {
    as: "button",
    variant: "navy",
    style: {
      height: 50
    }
  }, "Sign up")))), /*#__PURE__*/React.createElement(Section, {
    ground: "cream"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Kindstories",
    title: "Hear from our patients",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      alignItems: 'start'
    }
  }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement(Quote, {
    key: t.a,
    size: "sm",
    attribution: t.a
  }, t.q)))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 72
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Press"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, PRESS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.outlet,
    style: {
      borderTop: '2px solid var(--kb-navy)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.outlet), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      lineHeight: 1.35,
      color: 'var(--kb-navy)'
    }
  }, p.quote)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconRight: "arrow-right"
  }, "See more press"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LocationScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  SectionHeader,
  Quote,
  Select,
  Switch
} = window.KindbodyDesignSystem_929fb0;
const HOURS = [['Monday – Thursday', '7am-4pm'], ['Friday', '7am-2pm'], ['Saturday', '7am-12pm'], ['Sunday', 'Closed']];
const SERVICES = ['Fertility consults', 'IVF & conception care', 'Egg & embryo freezing', 'LGBTQ+ services', 'Male fertility care', 'Kindbody360: holistic care'];
function LocationScreen({
  onNavigate
}) {
  const [virtualOnly, setVirtualOnly] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 460,
      background: "url('../../assets/imagery/clinic-2.png') center/cover"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--image-protection)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 32px 48px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, "Kindbody signature clinic"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-2)',
      lineHeight: 1.05,
      color: 'var(--kb-white)'
    }
  }, "Kindbody New York City")))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 64
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Visit Kindbody New York City",
    size: "md",
    title: "Care that feels nothing like a clinic",
    intro: "Our clinics are designed around people, not procedures \u2014 a living room instead of a waiting room, and a care team that knows your name."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Services at this clinic"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Hours"), /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      fontSize: 15.5,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, HOURS.map(([d, h]) => /*#__PURE__*/React.createElement("tr", {
    key: d
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '7px 0',
      borderBottom: '1px solid var(--border-subtle)',
      color: 'var(--text-secondary)'
    }
  }, d), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '7px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textAlign: 'right',
      fontWeight: 500
    }
  }, h))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 10
    }
  }, "Hours are illustrative \u2014 the provided sources did not include clinic hours."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: "url('../../assets/imagery/clinic-1.png') center/cover",
      borderRadius: 'var(--radius-image)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: "url('../../assets/imagery/clinic-3.png') center/cover",
      borderRadius: 'var(--radius-image)'
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: 28,
    style: {
      position: 'sticky',
      top: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2
    }
  }, "Book an appointment"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Appointment type",
    options: ['Fertility consult', 'Egg freezing consult', 'IVF consult', 'Second opinion']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Clinic",
    options: ['New York, NY — 16 W 22nd St', 'Virtual']
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Virtual visits only",
    checked: virtualOnly,
    onChange: () => setVirtualOnly(!virtualOnly)
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right"
  }, "Continue")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 10,
      fontSize: 14.5,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17
  }), " 1-855-KND-BODY"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 17
  }), " navigator@kindbody.com"))))), /*#__PURE__*/React.createElement(Section, {
    ground: "cream",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "sm",
    attribution: "-New York Patient"
  }, "I was treated as an individual by all the providers and I am grateful. The team is absolutely amazing and caring. My doctor is one of a kind."), /*#__PURE__*/React.createElement(Quote, {
    size: "sm",
    variant: "cream",
    attribution: "-Silicon Valley Patient"
  }, "The staff at Kindbody is so kind and welcoming. We really appreciated the transparency of information from Kindbody.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('experts')
  }, "Meet the physicians here"))));
}
Object.assign(window, {
  LocationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LocationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Tabs,
  Accordion,
  SectionHeader,
  Badge,
  Tag,
  Icon,
  Select
} = window.KindbodyDesignSystem_929fb0;
const CATEGORIES = {
  'Fertility': [{
    name: 'Fertility Consults',
    body: 'A one-on-one consult with a Kindbody physician to understand your options.'
  }, {
    name: 'IVF & Conception Care',
    body: 'In vitro fertilization, IUI, and conception care from testing through transfer.'
  }, {
    name: 'Egg Freezing & Embryo Banking',
    body: 'Preserve your options on your own timeline.'
  }, {
    name: 'Male Fertility',
    body: 'Semen analysis, workup, and treatment through Kindman.'
  }, {
    name: 'Oncofertility',
    body: 'Fertility preservation for patients facing cancer treatment.'
  }],
  'Family building': [{
    name: 'LGBTQ+ Services',
    body: 'Care built for every path to parenthood.'
  }, {
    name: 'Donor, surrogacy & adoption',
    body: 'Support for intended parents, including gestational surrogacy.'
  }, {
    name: 'Kindbaby',
    body: 'Prenatal through postpartum support.'
  }],
  'Whole-person care': [{
    name: 'Kindbody360: Holistic Care',
    body: 'Nutrition, mental health, and acupuncture alongside clinical care.'
  }, {
    name: 'Menopause',
    body: 'Care across the menopause journey.'
  }, {
    name: 'Kindlabs',
    body: 'Diagnostics and genomics run in-house.'
  }]
};
const FAQS = [{
  title: 'Is Kindbody in-network with my health plan?',
  content: 'Kindbody is in-network with major health plans, and our team reviews your benefits before your first appointment so you know your costs up front.'
}, {
  title: 'Do you offer financing?',
  content: 'Yes — financing is available for self-pay patients, and members with the Kindbody benefit through their employer have their coverage applied automatically.'
}, {
  title: 'What if I get Kindbody through my employer?',
  content: 'You are a Kindbody member. Activate your benefit and your covered services are applied at the time of scheduling.'
}];
function ServicesScreen({
  onNavigate
}) {
  const [cat, setCat] = React.useState('Fertility');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    ground: "cream",
    pad: 64
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Services & pricing",
    size: "xl",
    title: "World-Class Fertility and Family-Building Care",
    intro: "Kindbody supports all paths to parenthood. Our board-certified clinical team is committed to exceptional patient outcomes and provides support every step of your journey."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "navy"
  }, "In-network with major health plans"), /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, "Financing available"), /*#__PURE__*/React.createElement(Badge, {
    tone: "rose"
  }, "Virtual consults"))), /*#__PURE__*/React.createElement(Section, {
    ground: "white",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(CATEGORIES),
    value: cat,
    onChange: setCat,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['All locations', 'New York, NY', 'Chicago, IL', 'Virtual'],
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, CATEGORIES[cat].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    variant: "hairline",
    padding: 28,
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      color: 'var(--kb-navy)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 20px',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Pricing shown at scheduling"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 26,
      fontSize: 12,
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      maxWidth: '70ch'
    }
  }, "Note for this kit: Kindbody\u2019s published self-pay prices were not part of the provided source material, so no figures are shown. Add the real price table before using this screen with patients.")), /*#__PURE__*/React.createElement(Section, {
    ground: "cream",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Insurance & financing",
    size: "md",
    title: "Making care accessible",
    intro: "Through employee benefits, financing, and insurance options."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: FAQS,
    defaultOpen: [0]
  }))), /*#__PURE__*/React.createElement(Section, {
    ground: "navy",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--type-display-3)',
      lineHeight: 1.08,
      color: 'var(--kb-cream)',
      maxWidth: '24ch'
    }
  }, "Ready when you are."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right"
  }, "Schedule"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    size: "lg",
    onClick: () => onNavigate('experts')
  }, "Meet our physicians")))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
