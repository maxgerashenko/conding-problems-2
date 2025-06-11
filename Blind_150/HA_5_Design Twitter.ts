// https://leetcode.com/problems/design-twitter/
// Design Twitter

class Twitter {
  followees = {};
  tweets = {};
  counter = 0;

  constructor() {}

  follow(followerId: number, followeeId: number): void {
    if (this.followees[followerId] == null) {
      this.followees[followerId] = new Set();
    }
    this.followees[followerId].add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.followees[followerId] == null) return;
    this.followees[followerId].delete(followeeId);
  }

  postTweet(userId: number, tweetId: number): void {
    this.counter++;
    if (this.tweets[userId] == null) {
      this.tweets[userId] = [];
      this.follow(userId, userId);
    }
    this.tweets[userId].push({ tweetId, counter: this.counter });
  }

  getNewsFeed(userId: number): number[] {
    let res = [];
    let maxHeap = new Heap((a, b) => b.counter - a.counter);

    if (!this.followees[userId]) return [];
    for (let followee of this.followees[userId]) {
      if (this.tweets[followee] == null || this.tweets[followee].length === 0)
        continue;
      let last = this.tweets[followee].length - 1;
      maxHeap.add({
        followee,
        tweetIndex: last,
        ...this.tweets[followee][last],
      });
    }
    while (res.length < 10 && maxHeap.heap.length > 0) {
      let { followee, tweetId, tweetIndex } = maxHeap.delete();
      res.push(tweetId);
      tweetIndex--;
      if (tweetIndex < 0) continue;
      maxHeap.add({
        followee,
        ...this.tweets[followee][tweetIndex],
        tweetIndex,
      });
    }
    return res;
  }
}
