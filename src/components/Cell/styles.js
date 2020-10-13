import { StyleSheet } from 'react-native'
import { CellTheme } from '../../themes/components'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: CellTheme.cell_height
  },

  commonRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  leftTopText: {
    color: CellTheme.left_top_text_color,
    fontSize: CellTheme.left_top_text_font_size,
    lineHeight: CellTheme.left_top_text_line_height
  },

  leftBottomText: {
    color: CellTheme.left_bottom_text_color,
    fontSize: CellTheme.left_bottom_text_font_size,
    lineHeight: CellTheme.left_bottom_text_line_height
  },

  rightTopText: {
    color: CellTheme.right_top_text_color,
    fontSize: CellTheme.right_top_text_font_size,
    lineHeight: CellTheme.right_top_text_line_height
  },

  rightBottomText: {
    color: CellTheme.right_bottom_text_color,
    fontSize: CellTheme.right_bottom_text_font_size,
    lineHeight: CellTheme.right_bottom_text_line_height
  },

  arrow: {
    width: CellTheme.arrow_width,
    height: CellTheme.arrow_height
  },

  unselected: {
    width: CellTheme.round_width,
    height: CellTheme.round_height,
    borderRadius: CellTheme.round_height / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: CellTheme.unselected_color
  },
  selected: {
    width: CellTheme.round_width,
    height: CellTheme.round_height,
    borderRadius: CellTheme.round_height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: CellTheme.selected_color
  },
  yes: {
    width: CellTheme.yes_width,
    height: CellTheme.yes_height
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: CellTheme.bottom_border_line_color
  }
})

export default styles
