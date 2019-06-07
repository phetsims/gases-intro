# Gases Intro - implementation notes

Both screens in this simulation are derived from the _Ideal_ screen from the _Gas Properties_ simulation.
For implementation notes, see [gas-properties/doc/implementation-notes.md](https://github.com/phetsims/gas-properties/blob/master/doc/implementation-notes.md).

In the _Intro_ screen, the "Hold Constant" radio buttons are hidden. 

The _Laws_ screen is identical to the _Ideal_ screen.

In _Gas Properties_, pressure noise is on by default.  In this sim, pressure noise if off by default.  
If desired, it can be enabled using query parameter `pressureNoise=true`.
