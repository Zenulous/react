import {VariantType, AlignContent} from './types'
import {Theme} from '../ThemeProvider'

export const getVariantStyles = (variant: VariantType = 'default', theme?: Theme) => {
  const style = {
    default: {
      color: 'btn.text',
      backgroundColor: 'btn.bg',
      boxShadow: `${theme?.shadows.btn.shadow}, ${theme?.shadows.btn.insetShadow}`,
      '&:hover:not([disabled])': {
        backgroundColor: 'btn.hoverBg',
        borderColor: 'btn.hoverBorder',
      },
      '&:active:not([disabled])': {
        backgroundColor: 'btn.activeBg',
        borderColor: 'btn.activeBorder',
      },
      '&:disabled': {
        color: 'primer.fg.disabled',
        '[data-component=ButtonCounter]': {
          color: 'inherit',
        },
      },
      '&[aria-expanded=true]': {
        backgroundColor: 'btn.activeBg',
        borderColor: 'btn.activeBorder',
      },
    },
    primary: {
      color: 'btn.primary.text',
      backgroundColor: 'btn.primary.bg',
      borderColor: 'btn.primary.border',
      boxShadow: `${theme?.shadows.btn.primary.shadow}`,
      '&:hover:not([disabled])': {
        color: 'btn.primary.hoverText',
        backgroundColor: 'btn.primary.hoverBg',
      },
      '&:focus:not([disabled])': {
        boxShadow: 'inset 0 0 0 3px',
      },
      '&:focus-visible:not([disabled])': {
        boxShadow: 'inset 0 0 0 3px',
      },
      '&:active:not([disabled])': {
        backgroundColor: 'btn.primary.selectedBg',
        boxShadow: `${theme?.shadows.btn.primary.selectedShadow}`,
      },
      '&:disabled': {
        color: 'btn.primary.disabledText',
        backgroundColor: 'btn.primary.disabledBg',
        '[data-component=ButtonCounter]': {
          color: 'inherit',
        },
      },
      '[data-component=ButtonCounter]': {
        backgroundColor: 'btn.primary.counterBg',
        color: 'btn.primary.text',
      },
      '&[aria-expanded=true]': {
        backgroundColor: 'btn.primary.selectedBg',
        boxShadow: `${theme?.shadows.btn.primary.selectedShadow}`,
      },
    },
    danger: {
      color: 'btn.danger.text',
      backgroundColor: 'btn.bg',
      boxShadow: `${theme?.shadows.btn.shadow}`,
      '&:hover:not([disabled])': {
        color: 'btn.danger.hoverText',
        backgroundColor: 'btn.danger.hoverBg',
        borderColor: 'btn.danger.hoverBorder',
        boxShadow: `${theme?.shadows.btn.danger.hoverShadow}`,
        '[data-component=ButtonCounter]': {
          backgroundColor: 'btn.danger.hoverCounterBg',
          color: 'btn.danger.hoverText',
        },
      },
      '&:active:not([disabled])': {
        color: 'btn.danger.selectedText',
        backgroundColor: 'btn.danger.selectedBg',
        boxShadow: `${theme?.shadows.btn.danger.selectedShadow}`,
        borderColor: 'btn.danger.selectedBorder',
      },
      '&:disabled': {
        color: 'btn.danger.disabledText',
        backgroundColor: 'btn.danger.disabledBg',
        borderColor: 'btn.danger.disabledBorder',
        '[data-component=ButtonCounter]': {
          color: 'inherit',
          backgroundColor: 'btn.danger.disabledCounterBg',
        },
      },
      '[data-component=ButtonCounter]': {
        color: 'btn.danger.text',
        backgroundColor: 'btn.danger.counterBg',
      },
      '&[aria-expanded=true]': {
        color: 'btn.danger.selectedText',
        backgroundColor: 'btn.danger.selectedBg',
        boxShadow: `${theme?.shadows.btn.danger.selectedShadow}`,
        borderColor: 'btn.danger.selectedBorder',
      },
    },
    invisible: {
      color: 'btn.text',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      '&:hover:not([disabled])': {
        backgroundColor: 'actionListItem.default.hoverBg',
      },
      '&:active:not([disabled])': {
        backgroundColor: 'actionListItem.default.activeBg',
      },
      '&:disabled': {
        color: 'primer.fg.disabled',
        '[data-component=ButtonCounter]': {
          color: 'inherit',
        },
      },
      '&[aria-expanded=true]': {
        backgroundColor: 'actionListItem.default.selectedBg',
      },
      svg: {
        color: 'fg.muted',
      },
      '&[data-no-visuals]': {
        color: 'accent.fg',
      },
    },
  }
  return style[variant]
}

export const getBaseStyles = (theme?: Theme) => ({
  borderRadius: '2',
  border: '1px solid',
  borderColor: theme?.colors.btn.border,
  fontFamily: 'inherit',
  fontWeight: 'semibold',
  fontSize: '1',
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '32px',
  padding: '0 12px',
  gap: '8px',
  minWidth: 'max-content',
  transition: '80ms cubic-bezier(0.65, 0, 0.35, 1)',
  transitionProperty: 'color, fill, background-color, border-color',
  '&[href]': {
    display: 'inline-flex',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  '&:hover': {
    transitionDuration: '80ms',
  },
  '&:active': {
    transition: 'none',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  '@media (forced-colors: active)': {
    '&:focus': {
      // Support for Windows high contrast https://sarahmhigley.com/writing/whcm-quick-tips
      outline: 'solid 1px transparent',
    },
  },
  '[data-component=ButtonCounter]': {
    fontSize: '1',
  },
  '&[data-component=IconButton]': {
    display: 'inline-grid',
    padding: 'unset',
    placeContent: 'center',
    width: '32px',
  },
  '&[data-size="small"]': {
    padding: '0 8px',
    height: '28px',
    gap: '4px',
    fontSize: '0',

    '[data-component="text"]': {
      lineHeight: 'calc(20 / 12)',
    },

    '[data-component=ButtonCounter]': {
      fontSize: '0',
    },

    '[data-component="buttonContent"] > :not(:last-child)': {
      mr: '4px',
    },

    '&[data-component=IconButton]': {
      width: '28px',
      padding: 'unset',
    },
  },
  '&[data-size="large"]': {
    padding: '0 16px',
    height: '40px',
    gap: '8px',

    '[data-component="buttonContent"] > :not(:last-child)': {
      mr: '8px',
    },

    '&[data-component=IconButton]': {
      width: '40px',
      padding: 'unset',
    },
  },
})

export const getButtonStyles = (theme?: Theme) => {
  const styles = {
    ...getBaseStyles(theme),
    '&[data-component="block"]': {
      width: '100%',
    },
    '[data-component="leadingVisual"]': {
      gridArea: 'leadingVisual',
    },
    '[data-component="text"]': {
      gridArea: 'text',
      lineHeight: 'calc(20/14)',
      whiteSpace: 'nowrap',
    },
    '[data-component="trailingVisual"]': {
      gridArea: 'trailingVisual',
    },
    '[data-component="trailingAction"]': {
      marginRight: '-4px',
    },
    '[data-component="buttonContent"]': {
      flex: '1 0 auto',
      display: 'grid',
      gridTemplateAreas: '"leadingVisual text trailingVisual"',
      gridTemplateColumns: 'min-content minmax(0, auto) min-content',
      alignItems: 'center',
      alignContent: 'center',
    },
    '[data-component="buttonContent"] > :not(:last-child)': {
      mr: '8px',
    },
  }
  return styles
}

export const getAlignContentSize = (alignContent: AlignContent = 'center') => ({
  justifyContent: alignContent === 'center' ? 'center' : 'flex-start',
})
