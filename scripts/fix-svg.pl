#!/usr/bin/perl
use strict;
use warnings;

my $file = 'public/og-image.svg';
open my $fh, '<', $file or die "Cannot open $file: $!";
my $content = do { local $/; <$fh> };
close $fh;

# Replace literal & with & in the specific text
$content =~ s/Full-Stack Engineer & System Architect/Full-Stack Engineer & System Architect/;

open $fh, '>', $file or die "Cannot write $file: $!";
print $fh $content;
close $fh;

print "fixed\n";