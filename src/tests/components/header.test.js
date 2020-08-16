import React from 'react'
import {Header} from '../../components/Header'
import {shallow} from 'enzyme'

test('should render Header correctly', () =>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () =>{
    const onLogoutSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={onLogoutSpy} />)
    wrapper.find('button').simulate('click')
    expect(onLogoutSpy).toHaveBeenCalled()
})

