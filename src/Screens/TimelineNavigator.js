import { createStackNavigator } from "react-navigation";
import { Colors } from "../config/utils";
import { TimelineScreen } from "./TimelineScreen";
import { TweetDetailScreen } from "./TweetDetailScreen";
import { ProfileScreen } from "./ProfileScreen";

export const MAIN_TIMELINE_SCREEN = "MAIN_TIMELINE_SCREEN";
export const TIMELINE_FEED_SCREEN = "TIMELINE_FEED_SCREEN";
export const TWEET_DETAIL_SCREEN = "TWEET_DETAIL_SCREEN";
export const PROFILE_SCREEN = "PROFILE_SCREEN";
export const USER_PROFILE = "USER_PROFILE";

/*

EXERCISE PART 3

- Create a stach Navigator for the TimeLine tab.

```
  [TIMELINE_FEED_SCREEN]: TimelineScreen,
  [TWEET_DETAIL_SCREEN]: TweetDetailScreen,
  [USER_PROFILE]: ProfileScreen,

```
- The `header backgroundColor for this navigator should be `Colors.brand.primary`
  and the header content is `Colors.light`.
*/

export const TimelineNavigator = TimelineScreen;
