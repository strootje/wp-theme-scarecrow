// import { assert as Assert } from 'chai';
// import { fake, match, mock, stub } from 'sinon';

// import { MenuLocation } from '../../../../../__generated__/globalTypes';
// import {
// 	FetchMenuByLocation, FetchMenuByLocationReducer
// } from '../../../../../src/app/Assets/Actions/Menus/FetchMenuByLocation';
// import { AnyAction, Dispatch } from 'redux';

// describe('FetchMenuByLocation', () => {

// 	it('FetchMenuByLocationAction dispatch should call dispatch twice', async () => {
// 		// Arrange
// 		const dispatchFake = fake();
// 		const getStateFake = fake();
// 		const clientFake = { query: () => {} };
// 		const queryFake = stub<Dispatch<AnyAction>>(, 'query');
// 		queryFake.yieldsAsync({ data: { menus: { [MenuLocation.HEADER]: { nodes: [{ name: 'test', menuItems: { nodes: [] }}]}}}});
// 		const action = FetchMenuByLocation(MenuLocation.HEADER);

// 		// Act
// 		await action(dispatchFake, getStateFake, clientFake as any);

// 		// Assert
// 		Assert.equal(dispatchFake.callCount, 2);
// 		Assert.isTrue(dispatchFake.neverCalledWith(match({ type: 'FETCH_MENU_BY_LOCATION__ERROR' })));
// 	})

// });
