import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

test('Should render LoginPage', () =>{
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})


test('should call startLogin on button click', () =>{
    const onLoginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={onLoginSpy} />)
    wrapper.find('button').simulate('click')
    expect(onLoginSpy).toHaveBeenCalled()
})