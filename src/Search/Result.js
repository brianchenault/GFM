import parse from 'html-react-parser';
import { CampaignTitle, ResultListItem } from './styles';
import { cleanUrl } from './utils';

const Result = ({
  result: {
    _highlightResult: { bene_name, fundname_cleaned, url, username }
  }
}) => {
  const campaignUrl = `https://www.gofundme.com/f/${cleanUrl(url?.value, [
    '<strong>',
    '</strong>'
  ])}`;

  return (
    <ResultListItem>
      <a href={campaignUrl} rel="noreferrer" target="_blank">
        <CampaignTitle>{parse(fundname_cleaned?.value)}</CampaignTitle>
        <div>
          by {parse(username?.value)}{' '}
          {bene_name?.value?.length > 0 && (
            <span>for {parse(bene_name?.value)}</span>
          )}
        </div>
      </a>
    </ResultListItem>
  );
};

export default Result;
