import styled from 'styled-components';
import SearchSvg from '../assets/icon_search.svg';
import CancelSearchSvg from '../assets/icon_close.svg';
import { colors } from '../config';

export const CampaignTitle = styled.div`
  margin-bottom: 0.4em;
`;

export const CancelSearchIcon = styled.img.attrs({
  src: CancelSearchSvg
})`
  position: absolute;
  right: 1rem;
  top: calc(50% - 0.425rem);
  width: 0.85rem;
  height: 0.85rem;
  cursor: pointer;
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
    background: #f7f7f7;
  }

  a {
    color: ${colors.darkGray};
    text-decoration: none;
  }
`;

export const RelatedSearchesList = styled.ol`
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
    background: #f7f7f7;
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
  left: 0.6rem;
  top: calc(50% - 8px);
  width: 16px;
  height: 16px;
`;

export const SearchInput = styled.input`
  height: 36px;
  width: 400px;
  padding: 0 10px 0 30px;
  border-radius: 4px;
  border: 1px solid ${colors.lightGray};
`;
