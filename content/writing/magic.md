---
title: Magic
description: I don't want your conjured abstraction.
date: 2024-11-28
---

About 6 months ago, I received an email from Vercel that they were [updating their pricing](https://vercel.com/blog/improved-infrastructure-pricing). The announcement instilled confidence that my current hobby plan would remain free, however the email suggested that one of my apps will go from being exactly free to ~$100/month. For context, this was a simple hacker news frontend, not American Healthcare. From a quick glance, it appeared this had to do with an excess of edge function invocations. What even is an edge function? And that's the problem. Vercel abstracted away the need to know. My ignorance _will_ cost me money.

So time is now running up and I'm rushing to find a self-hosting alternative to Vercel—a pretty wrapper around AWS. I'm a software engineer because I enjoy solving problems and enjoy deeply understanding how things work. Over time, though, this has been stripped from us either for capitalistic gains or to maintain control (or sometimes over zealous simplicity¹).

A fun journey, indeed. With an endless number of options, it comes down to which provider has some sort of billing cap. It's boggling how few of options allow this. My bank account is not deep enough to have an uncapped invoice. I'll stick to the flat $4/month please.

> A home grown tomato will almost-always taste better

This may only be the start. Stay competent, or not. Maybe do more yoga and gardening.

---

¹ Some tools introduce so much abstraction that entire guides and documentation are needed to understand them. Worse yet, these abstractions sometimes replace simple, builtin methods with overly complex alternatives. That's just unnecessary.

Before the abstraction, using a builtin method:

```
append_path('papaya')
```

After the abstraction, with the builtin method no longer accessible:

```
{
	performance = {
		adjust_paths = false,
		settings = {
			overwrite_defaults = false,
			paths = { 'papaya'}
		}
	}
}
```
