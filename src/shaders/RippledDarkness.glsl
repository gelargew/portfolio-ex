//Thanks iq for the hash functions

float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

vec2 hash( vec2 p )
{
    p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
	return fract(sin(p)*43758.5453);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	float aspect = iResolution.y / iResolution.x;
	vec2 uv = fragCoord.xy / iResolution.xy;
	uv.x /= aspect;
	float mdist = 1000.0;
	for (int x = 0; x < 5; x++)
	{
		for (int y = 0; y < 5; y++)
		{
			vec2 p = hash(vec2(x, y)) / vec2(aspect, 1);
			
			if (distance(p, uv) < mdist)
			{
				mdist = distance(p, uv) * cos(uv.x + iTime) * sin(uv.x + iTime);
				fragColor = vec4(hash(float(x) + float(y))) * cos(400.0 * mdist);
			}
		}
	}
}