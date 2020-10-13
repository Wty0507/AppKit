import { Color } from '../variables'

const CellTheme = {
  /** @cell_height 高度 */
  cell_height: 60,
  /** @bottom_border_line_color 底部边框颜色 */
  bottom_border_line_color: Color.grey1,

  /** @left_top_text_color 左侧顶部文字颜色 */
  left_top_text_color: Color.grey2,
  /** @left_top_text_font_size 左侧顶部文字字号 */
  left_top_text_font_size: 16,
  /** @left_top_text_line_height 左侧顶部文字行高 */
  left_top_text_line_height: 22,

  /** @left_bottom_text_color 左侧底部文字颜色 */
  left_bottom_text_color: Color.yellow1,
  /** @left_top_text_font_size 左侧底部文字字号 */
  left_bottom_text_font_size: 11,
  /** @left_top_text_line_height 左侧底部文字行高 */
  left_bottom_text_line_height: 15,

  /** @right_top_text_color 右侧顶部文字颜色 */
  right_top_text_color: Color.black,
  /** @right_top_text_font_size 右侧顶部文字字号 */
  right_top_text_font_size: 16,
  /** @right_top_text_line_height 右侧顶部文字行高 */
  right_top_text_line_height: 22,

  /** @right_bottom_text_color 右侧底部文字颜色 */
  right_bottom_text_color: Color.yellow1,
  /** @right_top_text_font_size 右侧底部文字字号 */
  right_bottom_text_font_size: 11,
  /** @right_top_text_line_height 右侧底部文字行高 */
  right_bottom_text_line_height: 15,

  /** @arrow_color 右侧箭头颜色 */
  arrow_color: Color.yellow1,
  /** @arrow_right 箭头icon */
  arrow_right: require('../../icons/arrow_right.png'),
  /** @arrow_width 箭头宽度 */
  arrow_width: 20,
  /** @arrow_height 箭头高度 */
  arrow_height: 20,

  unselected_color: Color.grey1,
  selected_color: Color.yellow2,
  /** @round_width 选择圆圈宽度 */
  round_width: 22,
  /** @round_height 选择圆圈高度 */
  round_height: 22,
  yes_icon: require('../../icons/yes.png'),
  /** @yes_width 选择圆圈宽度 */
  yes_width: 14,
  /** @yes_height 选择圆圈高度 */
  yes_height: 14
}

export default CellTheme
