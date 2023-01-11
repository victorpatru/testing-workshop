/* eslint-disable jest/prefer-todo */
import {isPasswordAllowed, userToJSON} from '../auth'

describe('isPasswordAllowed only allows some passwords', () => {
  // expect(isPasswordAllowed('')).toBe(false)
  // expect(isPasswordAllowed('00000000000')).toBe(false)
  // expect(isPasswordAllowed('FFFFFFFFFFF')).toBe(false)
  // expect(isPasswordAllowed('Victor12345')).toBe(true)
  // refactoring

  const passwordsAllowed = ['Victor12345']
  const passwordsNotAllowed = ['', '00000000000', 'FFFFFFFFFFF']

  passwordsAllowed.forEach((pwd) => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  passwordsNotAllowed.forEach((pwd) => {
    it(`"${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})

test('userToJSON excludes secure properties', () => {
  // Pull apart our safe user information which helps increase the maintainability of the test
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }
  const user = {
    // Spread it into the user together with the unsafe properties eg. exp, iat, hash
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  expect(userToJSON(user)).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
