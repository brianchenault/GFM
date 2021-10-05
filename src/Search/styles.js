import styled from 'styled-components';
import SearchSvg from '../assets/icon_search.svg';
import CancelSearchSvg from '../assets/icon_close.svg';
import { colors } from '../config';

export const CampaignTitle = styled.div`
  margin-bottom: 0.4em;
`;

export const CancelSearchIcon = styled.button`
  position: absolute;
  right: 1rem;
  top: calc(50% - 0.425rem);
  width: 0.85rem;
  height: 0.85rem;
  cursor: pointer;
  background: center no-repeat url(${CancelSearchSvg});
  border: none;
`;

export const Error = styled.span`
  margin-top: 1rem;
  color: ${colors.notificationRed};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: ${colors.darkGray};

  &:hover {
    color: ${colors.goFundMeGreen};
  }
`;

export const ResultListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.4rem -1rem;
  padding: 1rem;
  color: ${colors.darkGray};
  cursor: pointer;

  &:hover {
    background: ${colors.listItemBackground};
  }

  a {
    color: ${colors.darkGray};
    text-decoration: none;
  }
`;

export const RelatedSearchesList = styled.ul`
  width: 50%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ResultSearchesItem = styled.li`
  margin: 0 0 0 -1rem;
  padding: 1rem;
  color: ${colors.darkGray};
  cursor: pointer;

  &:hover {
    background: ${colors.listItemBackground};
  }

  a {
    color: ${colors.darkGray};
    text-decoration: none;
  }
`;

export const ResultsList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const SearchIcon = styled.img.attrs({
  src: SearchSvg
})`
  position: absolute;
  left: 0.8rem;
  top: calc(50% - 0.55rem);
  width: 1.1rem;
  height: 1.1rem;
`;

export const SearchInput = styled.input`
  height: 2.4rem;
  width: 30rem;
  padding-left: 2.4rem;
  border-radius: 0.3rem;
  border: 0.1rem solid ${colors.lightGray};

  &:focus {
    outline-color: ${colors.goFundMeGreen};
  }
`;
