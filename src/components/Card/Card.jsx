import React from 'react';
import { useDispatch } from 'react-redux';
import { changeUsers } from 'redux/userSlice'; 
import {
	CardStyled,
	CardMiddleLine,
	LogoImg,
	AvatarWrapper,
	AvatarWrapperIns,
	Avatar,
	UserInf,
	Tweets,
	Followers,
	ButtonStyled,
	ButtonStyledActive,
} from './Card.styled';
import Logo from 'images/Logo.png';
import { Grid } from '@mui/material';

export default function Card({ user }) {
	const dispatch = useDispatch();

	const toggleBtnFollowers = id => {
		dispatch(changeUsers(id));
	};

	const formatData = number => {
		return new Intl.NumberFormat('en-IN').format(number);
	};

	return (
		<Grid item>
			<CardStyled>
				<LogoImg src={Logo} />
				<CardMiddleLine />
				<AvatarWrapper>
					<AvatarWrapperIns>
						<Avatar src={user.avatar} />
					</AvatarWrapperIns>
				</AvatarWrapper>
				<UserInf>
					<Tweets>{formatData(user.tweets)} TWEETS</Tweets>
					<Followers>{formatData(user.followers)} FOLLOWERS</Followers>
				</UserInf>
				{user.isActiveBtn ? (
					<ButtonStyledActive
						onClick={() => toggleBtnFollowers(user.id)}
						type="button"
					>
						FOLLOWING
					</ButtonStyledActive>
				) : (
					<ButtonStyled
						onClick={() => toggleBtnFollowers(user.id)}
						type="button"
					>
						FOLLOW
					</ButtonStyled>
				)}
			</CardStyled>
		</Grid>
	);
}
