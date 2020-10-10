import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderBottomColor: '#BFBFBF',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  commonItemArrow: {
    width: 9,
    height: 14,
    resizeMode: 'contain',
    // marginRight: 10,
    marginLeft: 1
  },
  commonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end'
  },
  leftTopText: {
    color: '#5C5C5C',
    fontSize: 16
  },
  leftBottomText: {
    color: '#CFA948',
    fontSize: 11,
    marginTop: 6
  },
  rightTopText: {
    color: '#000000',
    fontSize: 16
  },
  rightBottomText: {
    color: '#CFA948',
    fontSize: 11,
    marginTop: 6
  },
  commonItemImage: {
    width: 20,
    height: 46 / 3,
    marginLeft: -5,
    marginRight: 10
  },
  trueIcon: {
    width: 16,
    height: 11
  },
  falseIcon: {
    width: 11,
    height: 11
  },
  yesContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBC752'
  },
  yes: {
    width: 12,
    height: 7
  },
  noContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderColor: '#A3A3A3',
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden'
  }
})

export default styles
