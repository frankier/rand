var searchIndex = {};
searchIndex["rand"] = {"doc":"Utilities for random number generation","items":[[3,"IsaacRng","rand","A random number generator that uses the ISAAC algorithm.",null,null],[3,"Isaac64Rng","","A random number generator that uses ISAAC-64, the 64-bit variant of the ISAAC algorithm.",null,null],[3,"ChaChaRng","","A random number generator that uses the ChaCha20 algorithm [1].",null,null],[3,"XorShiftRng","","An Xorshift[1] random number generator.",null,null],[3,"Hc128Rng","","A cryptographically secure random number generator that uses the HC-128 algorithm.",null,null],[3,"Error","","Error type of random number generators",null,null],[3,"Generator","","Iterator which will generate a stream of random items.",null,null],[3,"AsciiGenerator","","Iterator which will continuously generate random ascii characters.",null,null],[3,"Open01","","A wrapper for generating floating point numbers uniformly in the open interval `(0,1)` (not including either endpoint).",null,null],[12,"0","","",0,null],[3,"Closed01","","A wrapper for generating floating point numbers uniformly in the closed interval `[0,1]` (including both endpoints).",null,null],[12,"0","","",1,null],[3,"StdRng","","The standard RNG. This is designed to be efficient on the current platform.",null,null],[3,"ThreadRng","","The thread-local RNG.",null,null],[4,"ErrorKind","","Error kind which can be matched over.",null,null],[13,"Unavailable","","Permanent failure: likely not recoverable without user action.",2,null],[13,"Transient","","Temporary failure: recommended to retry a few times, but may also be irrecoverable.",2,null],[13,"NotReady","","Not ready yet: recommended to try again a little later.",2,null],[13,"Other","","Uncategorised error",2,null],[5,"weak_rng","","Create a weak random number generator with a default algorithm and seed.",null,{"inputs":[],"output":{"name":"xorshiftrng"}}],[5,"thread_rng","","Retrieve the lazily-initialized thread-local random number generator, seeded by the system. Intended to be used in method chaining style, e.g. `thread_rng().gen::<i32>()`.",null,{"inputs":[],"output":{"name":"threadrng"}}],[5,"random","","Generates a random value using the thread-local random number generator.",null,{"inputs":[],"output":{"name":"t"}}],[5,"sample","","DEPRECATED: use `seq::sample_iter` instead.",null,{"inputs":[{"name":"r"},{"name":"i"},{"name":"usize"}],"output":{"name":"vec"}}],[0,"distributions","","Sampling from random distributions.",null,null],[3,"RandSample","rand::distributions","A wrapper for generating types that implement `Rand` via the `Sample` & `IndependentSample` traits.",null,null],[3,"Weighted","","A value with a particular weight for use with `WeightedChoice`.",null,null],[12,"weight","","The numerical weight of this item",3,null],[12,"item","","The actual item which is being weighted",3,null],[3,"WeightedChoice","","A distribution that selects from a finite collection of weighted items.",null,null],[0,"range","","Generating numbers between two others.",null,null],[3,"Range","rand::distributions::range","Sample values uniformly between two bounds.",null,null],[8,"SampleRange","","The helper trait for types that have a sensible way to sample uniformly between two values. This should not be used directly, and is only to facilitate `Range`.",null,null],[10,"construct_range","","Construct the `Range` object that `sample_range` requires. This should not ever be called directly, only via `Range::new`, which will check that `low < high`, so this function doesn't have to repeat the check.",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"range"}}],[10,"sample_range","","Sample a value from the given `Range` with the given `Rng` as a source of randomness.",4,{"inputs":[{"name":"range"},{"name":"r"}],"output":{"name":"self"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"range"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `Range` instance that samples uniformly from `[low, high)`. Panics if `low >= high`.",5,{"inputs":[{"name":"x"},{"name":"x"}],"output":{"name":"range"}}],[11,"sample","","",5,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"sup"}}],[11,"ind_sample","","",5,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"sup"}}],[0,"gamma","rand::distributions","The Gamma and derived distributions.",null,null],[3,"Gamma","rand::distributions::gamma","The Gamma distribution `Gamma(shape, scale)` distribution.",null,null],[3,"ChiSquared","","The chi-squared distribution `χ²(k)`, where `k` is the degrees of freedom.",null,null],[3,"FisherF","","The Fisher F distribution `F(m, n)`.",null,null],[3,"StudentT","","The Student t distribution, `t(nu)`, where `nu` is the degrees of freedom.",null,null],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"gamma"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct an object representing the `Gamma(shape, scale)` distribution.",6,{"inputs":[{"name":"f64"},{"name":"f64"}],"output":{"name":"gamma"}}],[11,"sample","","",6,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",6,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"chisquared"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new chi-squared distribution with degrees-of-freedom `k`. Panics if `k < 0`.",7,{"inputs":[{"name":"f64"}],"output":{"name":"chisquared"}}],[11,"sample","","",7,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",7,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"fisherf"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `FisherF` distribution, with the given parameter. Panics if either `m` or `n` are not positive.",8,{"inputs":[{"name":"f64"},{"name":"f64"}],"output":{"name":"fisherf"}}],[11,"sample","","",8,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",8,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"studentt"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new Student t distribution with `n` degrees of freedom. Panics if `n <= 0`.",9,{"inputs":[{"name":"f64"}],"output":{"name":"studentt"}}],[11,"sample","","",9,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",9,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[0,"normal","rand::distributions","The normal and derived distributions.",null,null],[3,"StandardNormal","rand::distributions::normal","A wrapper around an `f64` to generate N(0, 1) random numbers (a.k.a.  a standard normal, or Gaussian).",null,null],[12,"0","","",10,null],[3,"Normal","","The normal distribution `N(mean, std_dev**2)`.",null,null],[3,"LogNormal","","The log-normal distribution `ln N(mean, std_dev**2)`.",null,null],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"standardnormal"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"rand","","",10,{"inputs":[{"name":"r"}],"output":{"name":"standardnormal"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"normal"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new `Normal` distribution with the given mean and standard deviation.",11,{"inputs":[{"name":"f64"},{"name":"f64"}],"output":{"name":"normal"}}],[11,"sample","","",11,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",11,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"lognormal"}}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new `LogNormal` distribution with the given mean and standard deviation.",12,{"inputs":[{"name":"f64"},{"name":"f64"}],"output":{"name":"lognormal"}}],[11,"sample","","",12,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",12,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[0,"exponential","rand::distributions","The exponential distribution.",null,null],[3,"Exp1","rand::distributions::exponential","A wrapper around an `f64` to generate Exp(1) random numbers.",null,null],[12,"0","","",13,null],[3,"Exp","","The exponential distribution `Exp(lambda)`.",null,null],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"exp1"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"rand","","",13,{"inputs":[{"name":"r"}],"output":{"name":"exp1"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"exp"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new `Exp` with the given shape parameter `lambda`. Panics if `lambda <= 0`.",14,{"inputs":[{"name":"f64"}],"output":{"name":"exp"}}],[11,"sample","","",14,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[11,"ind_sample","","",14,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"f64"}}],[8,"Sample","rand::distributions","Types that can be used to create a random instance of `Support`.",null,null],[10,"sample","","Generate a random value of `Support`, using `rng` as the source of randomness.",15,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"support"}}],[8,"IndependentSample","","`Sample`s that do not require keeping track of state.",null,null],[10,"ind_sample","","Generate a random value.",16,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"support"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"sample","","",17,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"sup"}}],[11,"ind_sample","","",17,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"sup"}}],[11,"new","","",17,{"inputs":[],"output":{"name":"randsample"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"weighted"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",18,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `WeightedChoice`.",18,null],[11,"sample","","",18,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"t"}}],[11,"ind_sample","","",18,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"t"}}],[0,"jitter","rand","Non-physical true random number generator based on timing jitter.",null,null],[3,"JitterRng","rand::jitter","A true random number generator based on jitter in the CPU execution time, and jitter in memory access time.",null,null],[4,"TimerError","","An error that can occur when `test_timer` fails.",null,null],[13,"NoTimer","","No timer available.",19,null],[13,"CoarseTimer","","Timer too coarse to use as an entropy source.",19,null],[13,"NotMonotonic","","Timer is not monotonically increasing.",19,null],[13,"TinyVariantions","","Variations of deltas of time too small.",19,null],[13,"TooManyStuck","","Too many stuck results (indicating no added entropy).",19,null],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",19,{"inputs":[{"name":"self"}],"output":{"name":"timererror"}}],[11,"eq","","",19,{"inputs":[{"name":"self"},{"name":"timererror"}],"output":{"name":"bool"}}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",19,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"new","","Create a new `JitterRng`. Makes use of `std::time` for a timer.",20,{"inputs":[],"output":{"generics":["jitterrng","timererror"],"name":"result"}}],[11,"new_with_timer","","Create a new `JitterRng`. A custom timer can be supplied, making it possible to use `JitterRng` in `no_std` environments.",20,null],[11,"set_rounds","","Configures how many rounds are used to generate each 64-bit value. This must be greater than zero, and has a big impact on performance and output quality.",20,{"inputs":[{"name":"self"},{"name":"u32"}],"output":null}],[11,"test_timer","","Basic quality tests on the timer, by measuring CPU timing jitter a few hundred times.",20,{"inputs":[{"name":"self"}],"output":{"generics":["u32","timererror"],"name":"result"}}],[11,"timer_stats","","Statistical test: return the timer delta of one normal run of the `JitterEntropy` entropy collector.",20,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"i64"}}],[11,"next_u32","","",20,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",20,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",20,null],[0,"os","rand","Interfaces to the operating system provided random number generators.",null,null],[3,"OsRng","rand::os","A random number generator that retrieves randomness straight from the operating system.",null,null],[11,"fmt","","",21,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `OsRng`.",21,{"inputs":[],"output":{"generics":["osrng","error"],"name":"result"}}],[11,"next_u32","","",21,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",21,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",21,null],[11,"try_fill_bytes","","",21,null],[0,"read","rand","A wrapper around any Read to treat it as an RNG.",null,null],[3,"ReadRng","rand::read","An RNG that reads random bytes straight from a `Read`. This will work best with an infinite reader, but this is not required.",null,null],[11,"fmt","","",22,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `ReadRng` from a `Read`.",22,{"inputs":[{"name":"r"}],"output":{"name":"readrng"}}],[11,"next_u32","","",22,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",22,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",22,null],[11,"try_fill_bytes","","",22,null],[0,"reseeding","rand","A wrapper around another RNG that reseeds it after it generates a certain number of random bytes.",null,null],[3,"ReseedingRng","rand::reseeding","A wrapper around any RNG which reseeds the underlying RNG after it has generated a certain number of random bytes.",null,null],[12,"reseeder","","Controls the behaviour when reseeding the RNG.",23,null],[3,"ReseedWithDefault","","Reseed an RNG using a `Default` instance. This reseeds by replacing the RNG with the result of a `Default::default` call.",null,null],[8,"Reseeder","","Something that can be used to reseed an RNG via `ReseedingRng`.",null,null],[10,"reseed","","Reseed the given RNG.",24,{"inputs":[{"name":"self"},{"name":"r"}],"output":null}],[11,"fmt","","",23,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `ReseedingRng` with the given parameters.",23,{"inputs":[{"name":"r"},{"name":"u64"},{"name":"rsdr"}],"output":{"name":"reseedingrng"}}],[11,"reseed_if_necessary","","Reseed the internal RNG if the number of bytes that have been generated exceed the threshold.",23,{"inputs":[{"name":"self"}],"output":null}],[11,"next_u32","","",23,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",23,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",23,null],[11,"try_fill_bytes","","",23,null],[11,"reseed","","",23,null],[11,"from_seed","","Create a new `ReseedingRng` from the given reseeder and seed. This uses a default value for `generation_threshold`.",23,null],[11,"clone","","",25,{"inputs":[{"name":"self"}],"output":{"name":"reseedwithdefault"}}],[11,"fmt","","",25,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"reseed","","",25,{"inputs":[{"name":"self"},{"name":"r"}],"output":null}],[11,"default","","",25,{"inputs":[],"output":{"name":"reseedwithdefault"}}],[0,"seq","rand","Functions for randomly accessing and sampling sequences.",null,null],[5,"sample_iter","rand::seq","Randomly sample `amount` elements from a finite iterator.",null,{"inputs":[{"name":"r"},{"name":"i"},{"name":"usize"}],"output":{"generics":["vec","vec"],"name":"result"}}],[5,"sample_slice","","Randomly sample exactly `amount` values from `slice`.",null,null],[5,"sample_slice_ref","","Randomly sample exactly `amount` references from `slice`.",null,null],[5,"sample_indices","","Randomly sample exactly `amount` indices from `0..length`.",null,{"inputs":[{"name":"r"},{"name":"usize"},{"name":"usize"}],"output":{"generics":["usize"],"name":"vec"}}],[0,"chacha","rand","The ChaCha random number generator.",null,null],[3,"ChaChaRng","rand::chacha","A random number generator that uses the ChaCha20 algorithm [1].",null,null],[0,"isaac","rand","The ISAAC random number generator.",null,null],[3,"IsaacRng","rand::isaac","A random number generator that uses the ISAAC algorithm.",null,null],[3,"Isaac64Rng","","A random number generator that uses ISAAC-64, the 64-bit variant of the ISAAC algorithm.",null,null],[11,"eq","rand","",2,{"inputs":[{"name":"self"},{"name":"errorkind"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"should_retry","","True if this kind of error may resolve itself on retry.",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"should_wait","","True if we should retry but wait before retrying",2,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"description","","A description of this error kind",2,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",26,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new instance, with specified kind and a message.",26,{"inputs":[{"name":"errorkind"},{"name":"str"}],"output":{"name":"self"}}],[11,"with_cause","","Create a new instance, with specified kind, message, and a chained cause.",26,{"inputs":[{"name":"errorkind"},{"name":"str"},{"name":"e"}],"output":{"name":"self"}}],[11,"kind","","Get the error kind",26,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"msg","","Get the error message",26,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",26,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",26,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",26,{"inputs":[{"name":"self"}],"output":{"generics":["stderror"],"name":"option"}}],[11,"rand","","",0,{"inputs":[{"name":"r"}],"output":{"generics":["f64"],"name":"open01"}}],[11,"rand","","",1,{"inputs":[{"name":"r"}],"output":{"generics":["f64"],"name":"closed01"}}],[11,"rand","","",0,{"inputs":[{"name":"r"}],"output":{"generics":["f32"],"name":"open01"}}],[11,"rand","","",1,{"inputs":[{"name":"r"}],"output":{"generics":["f32"],"name":"closed01"}}],[11,"clone","","",27,{"inputs":[{"name":"self"}],"output":{"name":"chacharng"}}],[11,"fmt","","",27,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_unseeded","","Create an ChaCha random number generator using the default fixed key of 8 zero words.",27,{"inputs":[],"output":{"name":"chacharng"}}],[11,"set_counter","","Sets the internal 128-bit ChaCha counter to a user-provided value. This permits jumping arbitrarily ahead (or backwards) in the pseudorandom stream.",27,{"inputs":[{"name":"self"},{"name":"u64"},{"name":"u64"}],"output":null}],[11,"next_u32","","",27,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",27,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",27,null],[11,"reseed","","",27,null],[11,"from_seed","","Create a ChaCha generator from a seed, obtained from a variable-length u32 array. Only up to 8 words are used; if less than 8 words are used, the remaining are set to zero.",27,null],[11,"rand","","",27,{"inputs":[{"name":"r"}],"output":{"name":"chacharng"}}],[11,"clone","","",28,{"inputs":[{"name":"self"}],"output":{"name":"hc128rng"}}],[11,"fmt","","",28,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next_u32","","",28,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",28,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",28,null],[11,"rand","","",28,{"inputs":[{"name":"r"}],"output":{"name":"hc128rng"}}],[11,"reseed","","",28,null],[11,"from_seed","","Create an HC-128 random number generator with a seed. The seed has to be 256 bits in length, matching the 128 bit `key` followed by 128 bit `iv` when HC-128 where to be used as a stream cipher.",28,null],[11,"clone","","",29,{"inputs":[{"name":"self"}],"output":{"name":"isaacrng"}}],[11,"fmt","","",29,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_unseeded","","Create an ISAAC random number generator using the default fixed seed.",29,{"inputs":[],"output":{"name":"isaacrng"}}],[11,"new_from_u64","","Creates an ISAAC random number generator using an u64 as seed. If `seed == 0` this will produce the same stream of random numbers as the reference implementation when used unseeded.",29,{"inputs":[{"name":"u64"}],"output":{"name":"isaacrng"}}],[11,"next_u32","","",29,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",29,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",29,null],[11,"rand","","",29,{"inputs":[{"name":"r"}],"output":{"name":"isaacrng"}}],[11,"reseed","","",29,null],[11,"from_seed","","Create an ISAAC random number generator with a seed. This can be any length, although the maximum number of elements used is 256 and any more will be silently ignored. A generator constructed with a given seed will generate the same sequence of values as all other generators constructed with that seed.",29,null],[11,"clone","","",30,{"inputs":[{"name":"self"}],"output":{"name":"isaac64rng"}}],[11,"fmt","","",30,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_unseeded","","Create a 64-bit ISAAC random number generator using the default fixed seed.",30,{"inputs":[],"output":{"name":"isaac64rng"}}],[11,"new_from_u64","","Creates an ISAAC-64 random number generator using an u64 as seed. If `seed == 0` this will produce the same stream of random numbers as the reference implementation when used unseeded.",30,{"inputs":[{"name":"u64"}],"output":{"name":"isaac64rng"}}],[11,"next_u32","","",30,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",30,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",30,null],[11,"rand","","",30,{"inputs":[{"name":"r"}],"output":{"name":"isaac64rng"}}],[11,"reseed","","",30,null],[11,"from_seed","","Create an ISAAC random number generator with a seed. This can be any length, although the maximum number of elements used is 256 and any more will be silently ignored. A generator constructed with a given seed will generate the same sequence of values as all other generators constructed with that seed.",30,null],[11,"clone","","",31,{"inputs":[{"name":"self"}],"output":{"name":"xorshiftrng"}}],[11,"fmt","","",31,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_unseeded","","Creates a new XorShiftRng instance which is not seeded.",31,{"inputs":[],"output":{"name":"xorshiftrng"}}],[11,"next_u32","","",31,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",31,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",31,null],[11,"reseed","","Reseed an XorShiftRng. This will panic if `seed` is entirely 0.",31,null],[11,"from_seed","","Create a new XorShiftRng. This will panic if `seed` is entirely 0.",31,null],[11,"rand","","",31,{"inputs":[{"name":"r"}],"output":{"name":"xorshiftrng"}}],[8,"Rand","","A type that can be randomly generated using an `Rng`.",null,null],[10,"rand","","Generates a random instance of this type using the specified source of randomness.",32,{"inputs":[{"name":"r"}],"output":{"name":"self"}}],[8,"Rng","","A random number generator.",null,null],[10,"next_u32","","Return the next random `u32`.",33,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","Return the next random `u64`.",33,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"next_f32","","Return the next random f32 selected from the half-open interval `[0, 1)`.",33,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"next_f64","","Return the next random f64 selected from the half-open interval `[0, 1)`.",33,{"inputs":[{"name":"self"}],"output":{"name":"f64"}}],[11,"fill_bytes","","Fill `dest` with random data.",33,null],[11,"try_fill_bytes","","Fill `dest` entirely with random data.",33,null],[11,"gen","","Return a random value of a `Rand` type.",33,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"gen_iter","","Return an iterator that will yield an infinite number of randomly generated items.",33,{"inputs":[{"name":"self"}],"output":{"name":"generator"}}],[11,"gen_range","","Generate a random value in the range [`low`, `high`).",33,{"inputs":[{"name":"self"},{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[11,"gen_weighted_bool","","Return a bool with a 1 in n chance of true",33,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"bool"}}],[11,"gen_ascii_chars","","Return an iterator of random characters from the set A-Z,a-z,0-9.",33,{"inputs":[{"name":"self"}],"output":{"name":"asciigenerator"}}],[11,"choose","","Return a random element from `values`.",33,null],[11,"choose_mut","","Return a mutable pointer to a random element from `values`.",33,null],[11,"shuffle","","Shuffle a mutable slice in place.",33,null],[8,"SeedableRng","","A random number generator that can be explicitly seeded to produce the same stream of randomness multiple times.",null,null],[10,"reseed","","Reseed an RNG with the given seed.",34,{"inputs":[{"name":"self"},{"name":"seed"}],"output":null}],[10,"from_seed","","Create a new RNG with the given seed.",34,{"inputs":[{"name":"seed"}],"output":{"name":"self"}}],[11,"fmt","","",35,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",35,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",36,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next","","",36,{"inputs":[{"name":"self"}],"output":{"generics":["char"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",37,{"inputs":[{"name":"self"}],"output":{"name":"stdrng"}}],[11,"fmt","","",37,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a randomly seeded instance of `StdRng`.",37,{"inputs":[],"output":{"generics":["stdrng","error"],"name":"result"}}],[11,"next_u32","","",37,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",37,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",37,null],[11,"try_fill_bytes","","",37,null],[11,"reseed","","",37,null],[11,"from_seed","","",37,null],[11,"clone","","",38,{"inputs":[{"name":"self"}],"output":{"name":"threadrng"}}],[11,"fmt","","",38,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next_u32","","",38,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"next_u64","","",38,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"fill_bytes","","",38,null],[11,"try_fill_bytes","","",38,null]],"paths":[[3,"Open01"],[3,"Closed01"],[4,"ErrorKind"],[3,"Weighted"],[8,"SampleRange"],[3,"Range"],[3,"Gamma"],[3,"ChiSquared"],[3,"FisherF"],[3,"StudentT"],[3,"StandardNormal"],[3,"Normal"],[3,"LogNormal"],[3,"Exp1"],[3,"Exp"],[8,"Sample"],[8,"IndependentSample"],[3,"RandSample"],[3,"WeightedChoice"],[4,"TimerError"],[3,"JitterRng"],[3,"OsRng"],[3,"ReadRng"],[3,"ReseedingRng"],[8,"Reseeder"],[3,"ReseedWithDefault"],[3,"Error"],[3,"ChaChaRng"],[3,"Hc128Rng"],[3,"IsaacRng"],[3,"Isaac64Rng"],[3,"XorShiftRng"],[8,"Rand"],[8,"Rng"],[8,"SeedableRng"],[3,"Generator"],[3,"AsciiGenerator"],[3,"StdRng"],[3,"ThreadRng"]]};
initSearch(searchIndex);
