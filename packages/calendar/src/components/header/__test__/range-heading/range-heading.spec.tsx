import {
  describe,
  expect,
  it,
} from '../../../../../../../shared/utils/stateless/testing/unit/unit-testing-library.impl'
import { createCalendarAppSingleton } from '../../../../factory'
import { factory } from './utils'
import { screen } from '@testing-library/preact'

describe('RangeHeading', () => {
  describe('displaying the localized range heading', () => {
    it.each([
      ['en-US', '2020-01-01', 'December 2019 – January 2020'],
      ['en-US', '2020-01-10', 'January 2020'],
      ['en-US', '2023-07-31', 'July – August 2023'],
      ['zh-CN', '2020-01-01', '十二月 2019年 – 一月 2020年'],
      ['zh-CN', '2020-01-10', '一月 2020年'],
      ['zh-CN', '2023-07-31', '七月 – 八月 2023年'],
    ])(
      'should display the localized range heading when in the week view',
      (locale, selectedDate, expectedRangeHeading) => {
        const $app = createCalendarAppSingleton({
          locale,
          datePicker: {
            selectedDate,
          },
        })
        factory($app)

        expect(screen.queryByText(expectedRangeHeading)).toBeTruthy()
      }
    )
  })
})
